import React from 'react';
import { ArrowRight, TrendingUp, PieChart, DollarSign, Globe, PiggyBank, Calculator, Shield, Star, Smartphone, BookOpen, Users, Building2, GraduationCap, CreditCard, Target, Home, Briefcase, Wallet, Landmark, FileText, BarChart3, Globe2, Calendar } from 'lucide-react';

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, onClose }) => {
  const menuContent = {
    achieve: {
      title: 'Yo quiero',
      sections: [
        {
          title: 'Digitalmente',
          items: [
            { 
              name: 'Universales Skandia', 
              icon: Smartphone
            },
            { 
              name: 'FIC Efectivo', 
              icon: DollarSign
            }
          ]
        },
        {
          title: 'Site inversiones',
          items: [
            { 
              name: 'Inversiones', 
              icon: PieChart
            }
          ]
        },
        {
          title: 'Delegándolo a los expertos',
          items: [
            { 
              name: 'Skandia Invest-Ed', 
              icon: GraduationCap
            },
            { 
              name: 'Skandia Vestiva', 
              icon: TrendingUp
            }
          ]
        },
        {
          title: 'Con asesor certificado',
          items: [
            { 
              name: 'Fondo de Capital Privado IMPACTO', 
              icon: Target
            },
            { 
              name: 'Crea tu portafolio de inversión', 
              icon: PieChart
            },
            { 
              name: 'FIC Skandia Multiplazo', 
              icon: Calendar
            },
            { 
              name: 'FIC Inmobiliario Grandes Superficies', 
              icon: Building2
            },
            { 
              name: 'FIC Inmobiliario Comprar para arrendar', 
              icon: Home
            }
          ]
        },
        {
          title: 'En el extranjero',
          items: [
            { 
              name: 'Skandia Vestiva', 
              icon: Globe
            },
            { 
              name: 'Inversiones más de USD $100K', 
              icon: DollarSign
            }
          ]
        }
      ]
    },
    about: {
      title: 'Quiénes somos',
      sections: [
        {
          title: 'Skandia Colombia',
          items: [
            { name: 'Quiénes somos', icon: Building2 },
            { name: 'Blog', icon: BookOpen },
            { name: 'Gestión del conocimiento', icon: GraduationCap },
            { name: 'Educación financiera', icon: Star },
            { name: 'Skandia Channel', icon: Smartphone }
          ]
        },
        {
          title: 'Nuestras empresas',
          items: [
            { name: 'Skandia Fiduciaria S.A.', icon: TrendingUp },
            { name: 'Skandia Pensiones y Cesantías', icon: PiggyBank },
            { name: 'Skandia Seguros de Vida S.A.', icon: Shield },
            { name: 'Skandia Valores S.A.', icon: CreditCard }
          ]
        },
        {
          title: 'Más información',
          items: [
            { name: 'Skandia LATAM', icon: Globe },
            { name: 'Trabaja con nosotros', icon: Briefcase }
          ]
        }
      ]
    },
    digital: {
      title: 'Productos digitales',
      sections: [
        {
          title: 'Plataformas digitales',
          items: [
            { name: 'Productos Universales Skandia', icon: Smartphone },
            { name: 'Cesantías', icon: CreditCard },
            { name: 'Skandia Cash FIC', icon: DollarSign },
            { name: 'SKANDIA APP', icon: Smartphone }
          ]
        },
        {
          title: 'Herramientas digitales',
          items: [
            { name: 'Diseña tu Portafolio Ideal', icon: PieChart },
            { name: 'VESTIVA', icon: TrendingUp },
            { name: 'Diagnóstico Financiero', icon: Calculator }
          ]
        }
      ]
    }
  };

  if (!activeMenu || !menuContent[activeMenu as keyof typeof menuContent]) {
    return null;
  }

  const content = menuContent[activeMenu as keyof typeof menuContent];

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-40"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid gap-8 ${activeMenu === 'achieve' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {activeMenu === 'achieve' ? (
            // Special layout for achieve menu with combined first column
            <>
              <div className="space-y-6">
                {/* Digitalmente section */}
                <div>
                  <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                    Digitalmente
                  </h3>
                  <div className="space-y-2 mt-6">
                    {content.sections[0].items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-emerald-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <item.icon className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 text-sm leading-tight">
                              {item.name}
                            </h4>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Site inversiones section */}
                <div>
                  <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                    Site inversiones
                  </h3>
                  <div className="space-y-2 mt-6">
                    {content.sections[1].items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-emerald-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <item.icon className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 text-sm leading-tight">
                              {item.name}
                            </h4>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Remaining sections */}
              {content.sections.slice(2).map((section, index) => (
                <div key={index + 2} className="space-y-6">
                  <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-emerald-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <item.icon className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 text-sm leading-tight">
                              {item.name}
                            </h4>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            // Standard layout for other menus
            content.sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                  {section.title}
                </h3>
                
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-emerald-100"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <item.icon className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 text-sm leading-tight">
                            {item.name}
                          </h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 group">
            Explorar todos los productos
            <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};
