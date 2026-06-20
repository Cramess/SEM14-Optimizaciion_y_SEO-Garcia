import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Contacto',
    description: `Ponte en contacto con ${personalInfo.name}`,
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contacto</h1>
                <p className="text-gray-600 mb-8 text-center">
                    ¿Tienes un proyecto en mente o simplemente quieres decir hola? 
                    ¡Me encantaría saber de ti!
                </p>

                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4">
                        <span className="font-semibold text-gray-800">Email:</span>
                        <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                            {personalInfo.email}
                        </a>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                        <span className="font-semibold text-gray-800">GitHub:</span>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {personalInfo.github}
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <span className="font-semibold text-gray-800">LinkedIn:</span>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Perfil de LinkedIn
                        </a>
                    </div>
                </div>

                <form className="mt-12 space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="tu@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" placeholder="¿En qué puedo ayudarte?"></textarea>
                    </div>
                    <button type="button" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-semibold">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
