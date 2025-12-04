#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir texto en mayúsculas a formato apropiado en archivos HTML
Respeta nombres propios y mantiene la estructura HTML
"""

import re
import sys

def convert_to_title_case(text, language='en'):
    """
    Convierte texto a formato apropiado respetando nombres propios
    """
    # Palabras que deben permanecer en minúsculas (artículos, preposiciones, etc.)
    if language == 'en':
        lowercase_words = {'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'or', 'the', 'to', 'with'}
    elif language == 'pt':
        lowercase_words = {'a', 'ao', 'aos', 'as', 'da', 'das', 'de', 'do', 'dos', 'e', 'em', 'na', 'nas', 'no', 'nos', 'o', 'os', 'ou', 'para', 'por', 'um', 'uma'}
    else:
        lowercase_words = set()
    
    # Nombres propios que deben mantener mayúsculas específicas
    proper_nouns = {
        'GR TURISMO AVENTURA': 'GR Turismo Aventura',
        'EASTER WEEK': 'Easter Week',
        'LOS MOLLES': 'Los Molles',
        'VALLE HERMOSO': 'Valle Hermoso',
        'RIO COBRE': 'Río Cobre',
        'RÍO COBRE': 'Río Cobre',
        'RIO TORDILLO': 'Río Tordillo',
        'RÍO TORDILLO': 'Río Tordillo',
        'PORTEZUELO ANCHO': 'Portezuelo Ancho',
        'LAS VEGAS NEGRAS': 'Las Vegas Negras',
        'EL MONTAÑES': 'El Montañés',
        'EL MONTAÑÉS': 'El Montañés',
        'REFUGIO PEHUENCHE': 'Refugio Pehuenche',
        'SAN RAFAEL': 'San Rafael',
        'MENDOZA': 'Mendoza',
        'MALARGUE': 'Malargüe',
        'MALARGÜE': 'Malargüe',
        'LOS ANDES': 'Los Andes',
        'LAGUNA VALLE HERMOSO': 'Laguna Valle Hermoso',
        'VALLE DE LA MATANSILLA': 'Valle de la Matansilla',
        'MIRADOR DE LOS TRES VALLES': 'Mirador de los Tres Valles',
        'SEMANA SANTA': 'Semana Santa',
        'HOLY WEEK': 'Holy Week',
        'JUEVES SANTO': 'Jueves Santo',
        'VIERNES SANTO': 'Viernes Santo',
        'HOLY THURSDAY': 'Holy Thursday',
        'GOOD FRIDAY': 'Good Friday',
        'WHATSAPP': 'WhatsApp',
        'WWW.GRTURISMOAVENTURA.COM.AR': 'www.grturismoaventura.com.ar',
        'GRTURISMOAVENTURA@GMAIL.COM': 'grturismoaventura@gmail.com',
    }
    
    # Primero reemplazar nombres propios conocidos
    result = text
    for old, new in proper_nouns.items():
        result = result.replace(old, new)
    
    return result

def process_html_file(input_file, output_file, language='en'):
    """
    Procesa un archivo HTML y convierte el texto apropiadamente
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Patrones para encontrar contenido de texto (fuera de etiquetas HTML y atributos)
    # Procesar contenido entre etiquetas
    def replace_text_content(match):
        tag_content = match.group(0)
        # Si es una etiqueta de título, párrafo o list item
        if any(tag in tag_content[:20] for tag in ['<h1>', '<h2>', '<h3>', '<p>', '<li>', '<strong>', '<small>', '<span>']):
            # Extraer el contenido de texto
            text_match = re.search(r'>([^<]+)<', tag_content)
            if text_match:
                original_text = text_match.group(1)
                # Solo procesar si está mayormente en mayúsculas
                if original_text.isupper() and len(original_text.strip()) > 3:
                    converted_text = convert_to_title_case(original_text, language)
                    tag_content = tag_content.replace(original_text, converted_text)
        return tag_content
    
    # Procesar todos los elementos con contenido de texto
    content = re.sub(r'<(h[1-6]|p|li|strong|small|span)[^>]*>.*?</\1>', replace_text_content, content, flags=re.DOTALL)
    
    # Convertir títulos específicos y textos comunes
    conversions_en = {
        'EASTER WEEK HORSEBACK RIDE': 'Easter Week Horseback Ride',
        'EASTER WEEK 2025 SPECIAL EDITION': 'Easter Week 2025 Special Edition',
        'EASTER WEEK SPECIAL OFFER': 'Easter Week Special Offer',
        'EASTER WEEK SPECIAL PROGRAM': 'Easter Week Special Program',
        'PERFECT FOR THE WHOLE FAMILY': 'Perfect for the Whole Family',
        'Experience Description': 'Experience Description',
        'SPECIAL PRICE': 'Special Price',
        'DURATION': 'Duration',
        'DIFFICULTY': 'Difficulty',
        'BEGINNER': 'Beginner',
        'MINIMUM AGE': 'Minimum Age',
        'YEARS': 'Years',
        'With responsible adult': 'With responsible adult',
        'per person': 'per person',
        'night': 'night',
        'Suitable for the whole family': 'Suitable for the whole family',
        'WHAT TO BRING': 'What to Bring',
        'CONTACT': 'Contact',
        'WEB:': 'Web:',
        'CORREO:': 'Email:',
        'UBICACIÓN:': 'Location:',
        'LOCATION:': 'Location:',
        'INCLUDED SERVICES': 'Included Services',
        'NOT INCLUDED SERVICES': 'Not Included Services',
        'SERVICES INCLUDED': 'Services Included',
        'SERVICES NOT INCLUDED': 'Services Not Included',
    }
    
    conversions_pt = {
        'CAVALGADA DE SEMANA SANTA': 'Cavalgada de Semana Santa',
        'OFERTA ESPECIAL SEMANA SANTA': 'Oferta Especial Semana Santa',
        'PROGRAMA ESPECIAL': 'Programa Especial',
        'PREÇO': 'Preço',
        'DURAÇÃO': 'Duração',
        'DIFICULDADE': 'Dificuldade',
        'PRINCIPIANTE': 'Principiante',
        'IDADE MÍNIMA': 'Idade Mínima',
        'ANOS': 'Anos',
        'por pessoa': 'por pessoa',
        'noite': 'noite',
        'O QUE LEVAR': 'O que levar',
        'CONTATO': 'Contato',
        'WEB:': 'Web:',
        'EMAIL:': 'Email:',
        'LOCALIZAÇÃO:': 'Localização:',
        'SERVIÇOS INCLUÍDOS': 'Serviços Incluídos',
        'SERVIÇOS NÃO INCLUÍDOS': 'Serviços Não Incluídos',
    }
    
    conversions = conversions_en if language == 'en' else conversions_pt
    
    for old, new in conversions.items():
        content = content.replace(old, new)
    
    # Escribir el archivo procesado
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Archivo procesado: {output_file}")

if __name__ == '__main__':
    # Archivos a procesar
    files_to_process = [
        {
            'input': '/Users/martinayaquinta/Downloads/project/cabalgatas-clean/public/pdfs/en/cabalgatasemanaSanta.html',
            'output': '/Users/martinayaquinta/Downloads/project/cabalgatas-clean/public/pdfs/en/cabalgatasemanaSanta.html',
            'language': 'en'
        },
        {
            'input': '/Users/martinayaquinta/Downloads/project/cabalgatas-clean/public/pdfs/pt/cabalgatasemanaSanta.html',
            'output': '/Users/martinayaquinta/Downloads/project/cabalgatas-clean/public/pdfs/pt/cabalgatasemanaSanta.html',
            'language': 'pt'
        }
    ]
    
    print("🔄 Iniciando conversión de archivos HTML...\n")
    
    for file_info in files_to_process:
        try:
            process_html_file(file_info['input'], file_info['output'], file_info['language'])
        except Exception as e:
            print(f"❌ Error procesando {file_info['input']}: {e}")
    
    print("\n✨ Conversión completada!")
