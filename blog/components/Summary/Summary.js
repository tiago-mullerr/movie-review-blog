import Image from 'next/image';

const Summary = ({ name, bio }) => {
    name = 'Tiago Muller de Oliveira';
    bio = 'Professional with over nine years of experience in the area of information technology acting as Software Engineer and currently studying Software Architecture'
    return (
        <div className='summary-container'>
            <div className='summary'>
                <div className='image-container'>
                    <Image className='rounded-image' width={350} height={350} src="/IMG_0415.jpeg"></Image>
                </div>
                <section>
                    <h1>{name}</h1>
                    <span>{bio}</span>
                </section>
            </div>
        </div>
    );
}

export default Summary;