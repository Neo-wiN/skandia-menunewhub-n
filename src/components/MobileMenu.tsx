
import React, { useState } from 'react';
import { X, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import { TrendingUp, PieChart, DollarSign, Globe, PiggyBank, Calculator, Shield, Star, Smartphone, BookOpen, Users, Building2, GraduationCap, CreditCard, Target, Home, Briefcase, Wallet, Landmark, FileText, BarChart3, Globe2, Calendar } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface MenuItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuItems }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const submenuContent = {
    achieve: [
      {
        title: 'Digitalmente',
        id: 'digital',
        items: [
          { 
            name: 'Universales Skandia', 
            hasSubmenu: false,
            icon: Smartphone
          },
          { 
            name: 'FIC Efectivo', 
            hasSubmenu: false,
            icon: DollarSign
          }
        ]
      },
      {
        title: 'Site inversiones',
        id: 'site-investments',
        items: [
          { 
            name: 'Inversiones', 
            hasSubmenu: false,
            icon: PieChart
          }
        ]
      },
      {
        title: 'Delegándolo a los expertos',
        id: 'experts',
        items: [
          { 
            name: 'Skandia Invest-Ed', 
            hasSubmenu: false,
            icon: GraduationCap
          },
          { 
            name: 'Skandia Vestiva', 
            hasSubmenu: false,
            icon: TrendingUp
          }
        ]
      },
      {
        title: 'Con asesor certificado',
        id: 'advisor',
        items: [
          { 
            name: 'Fondo de Capital Privado IMPACTO', 
            hasSubmenu: false,
            icon: Target
          },
          { 
            name: 'Crea tu portafolio de inversión', 
            hasSubmenu: false,
            icon: PieChart
          },
          { 
            name: 'FIC Skandia Multiplazo', 
            hasSubmenu: false,
            icon: Calendar
          },
          { 
            name: 'FIC Inmobiliario Grandes Superficies', 
            hasSubmenu: false,
            icon: Building2
          },
          { 
            name: 'FIC Inmobiliario Comprar para arrendar', 
            hasSubmenu: false,
            icon: Home
          }
        ]
      },
      {
        title: 'En el extranjero',
        id: 'abroad',
        items: [
          { 
            name: 'Skandia Vestiva', 
            hasSubmenu: false,
            icon: Globe
          },
          { 
            name: 'Inversiones más de USD $100K', 
            hasSubmenu: false,
            icon: DollarSign
          }
        ]
      }
    ],
    'why-skandia': [
      {
        title: 'Skandia Colombia',
        id: 'skandia-colombia',
        items: [
          { name: 'Quiénes somos', hasSubmenu: false, icon: Building2 },
          { name: 'Trabaja con nosotros', hasSubmenu: false, icon: Briefcase },
          { name: 'Blog', hasSubmenu: false, icon: BookOpen },
          { name: 'Gestión del conocimiento', hasSubmenu: false, icon: GraduationCap },
          { name: 'Educación financiera', hasSubmenu: false, icon: Star },
          { name: 'Skandia Channel', hasSubmenu: false, icon: Smartphone }
        ]
      },
      {
        title: 'Skandia LATAM',
        id: 'skandia-latam',
        items: [
          { name: '¿Quiénes somos?', hasSubmenu: false, icon: Globe }
        ]
      },
      {
        title: 'Compañías Skandia',
        id: 'companias-skandia',
        items: [
          { name: 'Skandia Fiduciaria S.A.', hasSubmenu: true, icon: TrendingUp, subitems: [
            '¿Quiénes Somos?',
            'Skandia Fondos de Inversión Colectiva',
            'Skandia Efectivo',
            'Skandia Multiplazo',
            'Inmobiliario Grandes Superficies',
            'Skandia Comprar para Arrendar',
            'Compartimiento Impacto',
            'Skandia Fideicomisos Especiales',
            'Skandia S&P 500 con K protegido'
          ]},
          { name: 'Skandia Pensiones y Cesantías', hasSubmenu: true, icon: PiggyBank, subitems: [
            'Fondo Voluntario de Pensión',
            '¿Quiénes Somos?',
            'Fondo de Pensiones Obligatorias',
            'Fondo Alternativo de Pensiones',
            'Fondo de Cesantías'
          ]},
          { name: 'Skandia Seguros de Vida S.A.', hasSubmenu: true, icon: Shield, subitems: [
            '¿Quiénes Somos?',
            'Seguros de Vida con Ahorro - Crea ahorro',
            'Seguro Individual de Pensiones - Crea retiro',
            'Seguro de Pensiones - Crea patrimonio',
            'Seguro Colectivo de pensiones'
          ]},
          { name: 'Skandia Valores S.A.', hasSubmenu: false, icon: CreditCard }
        ]
      }
    ],
    digital: [
      {
        title: 'Plataformas digitales',
        id: 'digital-platforms',
        items: [
          { name: 'Productos Universales Skandia', hasSubmenu: false, icon: Smartphone },
          { name: 'Cesantías', hasSubmenu: false, icon: CreditCard },
          { name: 'Skandia Cash FIC', hasSubmenu: false, icon: DollarSign },
          { name: 'SKANDIA APP', hasSubmenu: false, icon: Smartphone }
        ]
      },
      {
        title: 'Herramientas digitales',
        id: 'digital-tools',
        items: [
          { name: 'Diseña tu Portafolio Ideal', hasSubmenu: false, icon: PieChart },
          { name: 'VESTIVA', hasSubmenu: false, icon: TrendingUp },
          { name: 'Diagnóstico Financiero', hasSubmenu: false, icon: Calculator }
        ]
      }
    ]
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Menu */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold text-gray-900">skandia</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            {activeSubmenu ? (
              // Submenu view with accordion
              <div className="p-4">
                <button
                  onClick={() => setActiveSubmenu(null)}
                  className="flex items-center text-emerald-600 mb-4 hover:text-emerald-700 transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
                  <span className="font-medium">Volver</span>
                </button>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {submenuContent[activeSubmenu as keyof typeof submenuContent]?.map((section) => (
                    <AccordionItem key={section.id} value={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <AccordionTrigger className="font-medium text-gray-900 bg-gray-50 px-4 py-3 hover:no-underline">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="p-3">
                        <div className="space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex}>
                              <div 
                                className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-emerald-50 transition-colors duration-200 cursor-pointer group"
                                onClick={() => item.hasSubmenu && toggleSection(`${section.id}-${itemIndex}`)}
                              >
                                <div className="flex items-center space-x-3 flex-1">
                                  <item.icon className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                                  <span className="text-sm text-gray-700 group-hover:text-emerald-600">
                                    {item.name}
                                  </span>
                                </div>
                                {item.hasSubmenu ? (
                                  <ChevronDown className={`w-3 h-3 text-gray-400 group-hover:text-emerald-600 transition-all duration-200 ${
                                    expandedSection === `${section.id}-${itemIndex}` ? 'rotate-180' : ''
                                  }`} />
                                ) : (
                                  <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" />
                                )}
                              </div>
                              
                              {item.hasSubmenu && (item as any).subitems && expandedSection === `${section.id}-${itemIndex}` && (
                                <div className="ml-4 mt-1 space-y-1">
                                  {(item as any).subitems.map((subitem: string, subIndex: number) => (
                                    <div 
                                      key={subIndex}
                                      className="flex items-center justify-between py-1.5 px-3 rounded-md hover:bg-emerald-25 transition-colors duration-200 cursor-pointer group"
                                    >
                                      <span className="text-xs text-gray-600 group-hover:text-emerald-600">
                                        {subitem}
                                      </span>
                                      <ArrowRight className="w-2.5 h-2.5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              // Main menu view
              <div className="p-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => setActiveSubmenu(item.id)}
                      className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-200`} />
                        <span className="font-medium text-gray-900 text-left">{item.title}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors duration-200" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200">
              Inicia sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
