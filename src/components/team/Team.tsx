import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'Ajay Mokta',
        role: 'CEO & Founder',
        image: '/photo1.jpg',
        linkedin: 'https://www.linkedin.com/in/ajay-mokta-ab9b28247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/ajay.mokta?igsh=bGZmc3RzanFram9s'
    },
    {
        name: 'Shabd Patel',
        role: 'CTO & Lead Developer',
        image: '/photo2.jpg',
        linkedin: 'https://www.linkedin.com/in/shabdpatel8757/',
        instagram: 'https://instagram.com/shabd_patel_?igshid=ZDdkNTZiNTM='
    },
    {
        name: 'Nishant Prakhar',
        role: 'Mechanical Lead',
        image: '/photo3.jpg',
        linkedin: 'https://www.linkedin.com/in/nishant-prakhar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/nishant.prakhar?igsh=ZW81MHRvOWcwbWRj'
    },
    {
        name: 'Piyush Keshari',
        role: 'Mechanical Lead',
        image: '/photo4.jpg',
        linkedin: 'https://www.linkedin.com/in/piyush-keshri-22156025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/piyushkeshri442?igsh=eHZ0bDlvdHZ6ZWVm'
    },
    {
        name: 'Kushal Kesharwani',
        role: 'ML Engineer',
        image: '/photo6.jpg',
        linkedin: 'https://in.linkedin.com/in/kushal-kesharwani-49000525b',
        instagram: '#'
    },
    {
        name: 'Dishant Gupta',
        role: 'Chief Engineer',
        image: '/photo8.jpeg',
        linkedin: 'https://www.linkedin.com/in/dishant-gupta-44067926a/',
        instagram: 'https://www.instagram.com/dishantgupta20?utm_source=qr&igsh=dHcxMHgxYTJqODU0'
    },
    {
        name: 'Khushi',
        role: 'Client Executive',
        image: '/photo9.jpeg',
        linkedin: '#',
        instagram: 'https://www.instagram.com/khushi_yadav.19?igsh=MTEzaDlza2JlaTY1Nw=='
    },
    {
        name: 'Ayush Sharma',
        role: 'Advisor',
        image: '/photo7.jpeg',
        linkedin: 'https://www.linkedin.com/in/ayush-kumar-sharma-337b0631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        instagram: 'https://www.instagram.com/_ayu.sh1?igsh=MXEzOTNyNTFpY2xxMg=='
    },
    {
        name: 'Sanchit Mittal',
        role: 'Tech & Content Lead',
        image: '/photo5.jpg',
        linkedin: 'https://www.linkedin.com/in/sanchit-mittal-041a3b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagram: 'https://www.instagram.com/sanchit068?igsh=MW5lMnA5Y3V6c3Bhag=='
    },
];

const Team = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-neutral-100 to-blue-400">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-teal-600 mb-4">Meet Our Team</h2>
                <p className="text-gray-600 mb-12 ml-5 mr-5">
                    We are a dedicated group of professionals committed to delivering the best results.
                    Together, we bring a blend of skills and creativity to ensure the success of every project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-slate-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center">
                                <img
                                    src={member.image}
                                    alt={`${member.name} photo`}
                                    className="w-32 h-32 object-cover rounded-full mt-4"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="mt-2 text-gray-600">{member.role}</p>
                                <div className="mt-2 flex justify-center space-x-4">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
                                            <FaLinkedin size={24} />
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">
                                            <FaInstagram size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
