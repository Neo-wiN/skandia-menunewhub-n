
import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full -translate-y-48 translate-x-48 opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-48 -translate-x-48 opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Más de 1 millón de colombianos confían en nosotros
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Vive la vida que 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {" "}quieres
                </span>
                , no la que tienes que vivir
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubre cómo hacer que tu dinero trabaje para ti. Con Skandia, cada peso invertido es un paso hacia la libertad financiera que mereces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 group">
                Comenzar mi plan financiero
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Ver cómo funciona
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">$2.1T</div>
                <div className="text-sm text-gray-600">Activos administrados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">AAA</div>
                <div className="text-sm text-gray-600">Calificación crediticia</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Tu progreso financiero</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Inversiones</span>
                    <span className="font-semibold text-emerald-600">+12.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Protección</span>
                    <span className="font-semibold text-blue-600">+8.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-1/2"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Retiro</span>
                    <span className="font-semibold text-purple-600">+15.1%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                
                <div className="text-center pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">$125,430,000</div>
                  <div className="text-sm text-gray-600">Total proyectado a 10 años</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
