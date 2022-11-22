import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Home.scss"

const Home = (): JSX.Element => {
  return (
    <article className="home">
      <StaticImage
        src="../../images/profile-image.jpeg"
        alt="my profile image"
        quality={100}
        width={300}
        height={300}
        className="profile-image"
      />
      <p>
        プログラミングが好きで、WebサイトやWebアプリケーション、Web APIなどを趣味で開発しています。
      </p>
      <p>
        2022年に新卒入社した会社を半年で退職し、現在は川崎市高津区にてWeb関係の勉強をしながら狭いアパートにて一人暮らしをしています。
      </p>
      <p>
        最近ハマっていることは絵を描くことです。複雑な現実を単純な形に分解して、絵の中に再構築していくというプロセスが非常にプログラミングと似通っており、美しく感じています。
      </p>
      <p>
        また、時間を見つけては多摩川沿いをランニングをしています。継続するうちに速く走れるようになっていくのが楽しいのはもちろんのこと、自然を近くに感じながら体を動かすことで癒されています。
      </p>
      <p>
        広くて芝生のある公園が好きなので、新宿御苑や昭和記念公園、近場では代々木公園や駒沢公園などをたまに散歩しております。
      </p>
      
    </article>
  )
}

export default Home
