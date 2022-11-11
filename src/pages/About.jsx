import React from 'react'
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <Navbar /> {/* abouta gidince yine navbar gözükmesi için tekrar burayada yazdık */}
      <div >
        <div className="flex justify-center flex-col items-center mt-[5rem]">
          <img className="rounded-full h-[25rem] w-[25rem]" src="https://media.tenor.com/LjhaLjAdrQgAAAAC/winnie-the-pooh-hungry.gif" alt="bos"
            width="350px"
            margin="auto"  />
          <div className="text-center w-[25rem]">
            <p className="text-2xl mt-5 font-semibold">
              Hello welcome to Food World . This site impresive to you
            </p>
            <br/>
            <p className="text*xl mt-5 leading-8">  {/* leading satır aralığı oluyor */}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </p>
            <br/>
            <p className="text*xl mt-5 leading-8">
              Augue malesuada massa torquent diam tortor; porttitor dis massa. Habitasse nunc ad placerat;
              ante netus gravida a porttitor. Vel aliquet hendrerit efficitur facilisis fames lacinia porta
              per. Integer euismod aenean mi hendrerit in volutpat consequat tempus turpis. Bibendum massa ad
              tincidunt, platea montes ac arcu. Penatibus elit justo adipiscing magna vulputate leo per.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About



/* "rounded-full h-[25rem] w-[25rem] " */
