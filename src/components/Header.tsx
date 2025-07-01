import React, { useState } from 'react';
import { ChevronDown, Menu, X, Target, Shield, PiggyBank, Users, Smartphone, ChevronRight, ArrowLeft } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string>('invest'); // Default to 'invest'
  const [hoveredWhySkandiaSubmenu, setHoveredWhySkandiaSubmenu] = useState<string>('skandia-colombia'); // Default for why skandia

  const mainMenuItems = [
    {
      id: 'achieve',
      title: 'Hoy quiero',
      icon: Target,
      color: 'text-emerald-600'
    },
    {
      id: 'why-skandia',
      title: '¿Por qué Skandia?',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: 'digital',
      title: 'Skandia digital',
      icon: Smartphone,
      color: 'text-purple-600'
    }
  ];

  const subMenuContent = {
    achieve: [
      { id: 'invest', title: 'Invertir' },
      { id: 'protect', title: 'Protegerme' },
      { id: 'retirement', title: 'Construir mi retiro' },
      { id: 'advice', title: 'Asesoría' }
    ],
    'why-skandia': [
      { id: 'skandia-colombia', title: 'Skandia Colombia' },
      { id: 'skandia-latam', title: 'Skandia LATAM' },
      { id: 'companias-skandia', title: 'Compañias Skandia' }
    ]
  };

  const investmentColumns = {
    'Digitalmente': [
      'Universales Skandia',
      'FIC Efectivo'
    ],
    'En el exterior': [
      'Portafolio USD',
      'Inversiones más de USD $100K'
    ],
    'Delegándolo a expertos': [
      'Skandia Invest-Ed',
      'Portafolio USD'
    ],
    'Con un asesor': [
      'Fondo de Capital Privado IMPACTO',
      'FIC Skandia Multiplazo',
      'FIC Inmobiliario Grandes Superficies',
      'FIC Inmobiliario Comprar para arrendar'
    ]
  };

  const protectionColumns = {
    'Ante imprevistos': [
      'Seguro-Crea Ahorro',
      'Fondo de Cesantías',
      'FIC Efectivo'
    ],
    'Junto a los que amo': [
      'Seguro + Ahorro – Crea Retiro',
      'Seguro + Ahorro – Crea Patrimonio',
      'Seguro + Ahorro – Crea Serenidad',
      'Skandia Mfund – Capital + Seguro'
    ]
  };

  const retirementColumns = {
    'Digitalmente': [
      'Fondos de pensiones Obligatorias',
      'Skandia Multifund'
    ],
    'Con ayuda de un asesor': [
      'Seguro-Crea retiro',
      'ACCAI Skandia'
    ]
  };

  const whySkandiaColumns = {
    'skandia-colombia': {
      'Sobre nosotros': [
        'Quiénes somos',
        'Trabaja con nosotros'
      ],
      'Aprende junto a Skandia': [
        'Blog',
        'Gestión del Conocimiento',
        'Educación Financiera',
        'Skandia Channel'
      ]
    },
    'companias-skandia': {
      'Skandia Fiduciaria S.A.': [
        '¿Quienes Somos?',
        'Skandia Fondos de Inversión Colectiva',
        'Skandia Efectivo',
        'Skandia Multiplazo',
        'Inmobiliario Grandes Superficies',
        'Skandia Comprar para Arrendar',
        'Compartimiento Impacto',
        'Skandia Fideicomisos Especiales',
        'Skandia S&P 500 con K protegido'
      ],
      'Skandia Pensiones y Cesantías': [
        'Fondo Voluntario de Pensión',
        '¿Quiénes Somos?',
        'Fondo de Pensiones Obligatorias',
        'Fondo Alternativo de Pensiones',
        'Fondo de Cesantías'
      ],
      'Skandia Seguros de Vida S.A.': [
        '¿Quiénes Somos?',
        'Seguros de Vida con Ahorro - Crea ahorro',
        'Seguro Individual de Pensiones - Crea retiro',
        'Seguro de Pensiones - Crea patrimonio',
        'Seguro Colectivo de pensiones'
      ],
      'Skandia Valores S.A.': [
        'Skandia Valores S.A.'
      ]
    },
    'skandia-latam': [
      '¿Quienes somos?'
    ]
  };

  const digitalColumns = {
    'Primera columna': [
      'Universales Skandia',
      'FIC Skandia Efectivo',
      'Diseña tu portafolio ideal'
    ],
    'Segunda columna': [
      'Diagnóstico financiero',
      'Cesantías',
      'Skandia App',
      'Vestiva'
    ]
  };

  const handleMainMenuClick = (menuId: string) => {
    if (menuId !== 'achieve' && menuId !== 'why-skandia' && menuId !== 'digital') {
      // For other menu items, use click-based navigation
      setActiveMenu(activeMenu === menuId ? null : menuId);
    }
  };

  const handleSubMenuHover = (subMenuId: string) => {
    setHoveredSubmenu(subMenuId);
  };

  const handleWhySkandiaSubMenuHover = (subMenuId: string) => {
    setHoveredWhySkandiaSubmenu(subMenuId);
  };

  const handleItemClick = (item: string) => {
    console.log('Clicked item:', item);
    // Add navigation logic here
  };

  const handleAchieveMenuEnter = () => {
    setActiveMenu('achieve');
    setHoveredSubmenu('invest'); // Reset to default
  };

  const handleWhySkandiaMenuEnter = () => {
    setActiveMenu('why-skandia');
    setHoveredWhySkandiaSubmenu('skandia-colombia'); // Reset to default
  };

  const handleDigitalMenuEnter = () => {
    setActiveMenu('digital');
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const renderHoverBasedMenu = () => {
    if (activeMenu === 'achieve') {
      return (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50"
          onMouseEnter={() => setActiveMenu('achieve')}
          onMouseLeave={handleMenuLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex">
              {/* Left sidebar with submenu options */}
              <div className="w-64 pr-8 border-r border-gray-200">
                <div className="space-y-2">
                  {subMenuContent.achieve.map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => handleSubMenuHover(item.id)}
                      className={`group cursor-pointer p-4 rounded-lg transition-all duration-200 border border-transparent ${
                        hoveredSubmenu === item.id 
                          ? 'bg-emerald-50 border-emerald-100 shadow-md' 
                          : 'hover:bg-gray-50 hover:border-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold transition-colors duration-200 ${
                          hoveredSubmenu === item.id 
                            ? 'text-emerald-600' 
                            : 'text-gray-900 group-hover:text-emerald-600'
                        }`}>
                          {item.title}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-all duration-200 ${
                          hoveredSubmenu === item.id 
                            ? 'text-emerald-600 translate-x-1' 
                            : 'text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content area */}
              <div className="flex-1 pl-8">
                {hoveredSubmenu === 'invest' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Invertir</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {Object.entries(investmentColumns).map(([columnTitle, items]) => (
                        <div key={columnTitle} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                            {columnTitle}
                          </h3>
                          <div className="space-y-2">
                            {items.map((item, index) => (
                              <div 
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="group cursor-pointer p-3 rounded-lg hover:bg-emerald-50 transition-all duration-200 border border-transparent hover:border-emerald-100 hover:shadow-sm transform hover:scale-105"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors duration-200">
                                    {item}
                                  </span>
                                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {hoveredSubmenu === 'protect' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Protegerme</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {Object.entries(protectionColumns).map(([columnTitle, items]) => (
                        <div key={columnTitle} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                            {columnTitle}
                          </h3>
                          <div className="space-y-2">
                            {items.map((item, index) => (
                              <div 
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="group cursor-pointer p-3 rounded-lg hover:bg-emerald-50 transition-all duration-200 border border-transparent hover:border-emerald-100 hover:shadow-sm transform hover:scale-105"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors duration-200">
                                    {item}
                                  </span>
                                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {hoveredSubmenu === 'retirement' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Construir mi retiro</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {Object.entries(retirementColumns).map(([columnTitle, items]) => (
                        <div key={columnTitle} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-emerald-100">
                            {columnTitle}
                          </h3>
                          <div className="space-y-2">
                            {items.map((item, index) => (
                              <div 
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="group cursor-pointer p-3 rounded-lg hover:bg-emerald-50 transition-all duration-200 border border-transparent hover:border-emerald-100 hover:shadow-sm transform hover:scale-105"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors duration-200">
                                    {item}
                                  </span>
                                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {hoveredSubmenu === 'advice' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Asesoría</h2>
                    <p className="text-gray-600">Haz tu diagnostico financiero</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeMenu === 'why-skandia') {
      return (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50"
          onMouseEnter={() => setActiveMenu('why-skandia')}
          onMouseLeave={handleMenuLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex">
              {/* Left sidebar with submenu options */}
              <div className="w-64 pr-8 border-r border-gray-200">
                <div className="space-y-2">
                  {subMenuContent['why-skandia'].map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => handleWhySkandiaSubMenuHover(item.id)}
                      className={`group cursor-pointer p-4 rounded-lg transition-all duration-200 border border-transparent ${
                        hoveredWhySkandiaSubmenu === item.id 
                          ? 'bg-blue-50 border-blue-100 shadow-md' 
                          : 'hover:bg-gray-50 hover:border-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold transition-colors duration-200 ${
                          hoveredWhySkandiaSubmenu === item.id 
                            ? 'text-blue-600' 
                            : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {item.title}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-all duration-200 ${
                          hoveredWhySkandiaSubmenu === item.id 
                            ? 'text-blue-600 translate-x-1' 
                            : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content area */}
              <div className="flex-1 pl-8">
                {hoveredWhySkandiaSubmenu === 'skandia-colombia' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Skandia Colombia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {Object.entries(whySkandiaColumns['skandia-colombia']).map(([columnTitle, items]) => (
                        <div key={columnTitle} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-blue-100">
                            {columnTitle}
                          </h3>
                          <div className="space-y-2">
                            {items.map((item, index) => (
                              <div 
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="group cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100 hover:shadow-sm transform hover:scale-105"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                    {item}
                                  </span>
                                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {hoveredWhySkandiaSubmenu === 'companias-skandia' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Compañias Skandia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {Object.entries(whySkandiaColumns['companias-skandia']).map(([columnTitle, items]) => (
                        <div key={columnTitle} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg pb-3 border-b-2 border-blue-100">
                            {columnTitle}
                          </h3>
                          <div className="space-y-2">
                            {items.map((item, index) => (
                              <div 
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="group cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100 hover:shadow-sm transform hover:scale-105"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                    {item}
                                  </span>
                                  <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {hoveredWhySkandiaSubmenu === 'skandia-latam' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Skandia LATAM</h2>
                    <div className="space-y-2">
                      {whySkandiaColumns['skandia-latam'].map((item, index) => (
                        <div 
                          key={index}
                          onClick={() => handleItemClick(item)}
                          className="group cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100 hover:shadow-sm transform hover:scale-105"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                              {item}
                            </span>
                            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeMenu === 'digital') {
      return (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50"
          onMouseEnter={() => setActiveMenu('digital')}
          onMouseLeave={handleMenuLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skandia digital</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(digitalColumns).map(([columnTitle, items]) => (
                <div key={columnTitle} className="space-y-4">
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <div 
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className="group cursor-pointer p-3 rounded-lg hover:bg-purple-50 transition-all duration-200 border border-transparent hover:border-purple-100 hover:shadow-sm transform hover:scale-105"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-200">
                            {item}
                          </span>
                          <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-sm">
              <div className="flex space-x-6">
                <span className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors hover:bg-emerald-50 px-2 py-1 rounded">Personas</span>
                <span className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors hover:bg-emerald-50 px-2 py-1 rounded">Empresas</span>
                <span className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors hover:bg-emerald-50 px-2 py-1 rounded">Distribuidores</span>
              </div>
              <div className="flex space-x-6">
                <span className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors hover:bg-emerald-50 px-2 py-1 rounded">Acciones rápidas</span>
                <span className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors hover:bg-emerald-50 px-2 py-1 rounded">Atención al cliente</span>
                <span className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors hover:bg-emerald-50 px-2 py-1 rounded">Canales</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">skandia</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {mainMenuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => {
                    if (item.id === 'achieve') {
                      handleAchieveMenuEnter();
                    } else if (item.id === 'why-skandia') {
                      handleWhySkandiaMenuEnter();
                    } else if (item.id === 'digital') {
                      handleDigitalMenuEnter();
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.id === 'achieve' || item.id === 'why-skandia' || item.id === 'digital') {
                      // Don't close immediately, let the submenu handle it
                    }
                  }}
                >
                  <button 
                    onClick={() => handleMainMenuClick(item.id)}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-all duration-200 group transform hover:scale-105"
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors duration-200" />
                  </button>
                </div>
              ))}
            </nav>

            {/* Login button and mobile menu */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-full font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                Inicia sesión
              </button>
              
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu (click-based for non-hover menus) */}
        {activeMenu && activeMenu !== 'achieve' && activeMenu !== 'why-skandia' && activeMenu !== 'digital' && (
          <MegaMenu 
            activeMenu={activeMenu} 
            onClose={() => setActiveMenu(null)} 
          />
        )}
        
        {/* Hover-based Menu for "Hoy quiero", "¿Por qué Skandia?", and "Skandia digital" */}
        {renderHoverBasedMenu()}
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={mainMenuItems}
      />
    </>
  );
};

export default Header;
