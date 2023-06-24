import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
  
    <>
        <div className="home" id='home'>
            <main>
                <h1>Harshil Tech</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to tech problems
                    you face every day. We are leading tech company whose aim is to
                    increase the problem solving ability in children.
                </p>
            </div>
        </div>
        <div className="home3" id='about'>
            <div>
                <h1>Who we  are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem, aspernatur neque ad totam qui eveniet est amet exercitationem adipisci sapiente doloremque blanditiis fugit commodi consequuntur minus recusandae ducimus veritatis!
                Delectus rem sit nihil repellendus obcaecati voluptatem consectetur, provident doloremque illo, cupiditate eaque! Incidunt commodi molestiae voluptatem ullam aut. Repellendus cupiditate reprehenderit laborum veritatis velit nobis repudiandae quisquam mollitia dolorem!
                Asperiores voluptatum molestias modi magnam autem, blanditiis debitis harum optio maxime enim quia error dolorem repellat consequuntur ut perferendis quos, iure, explicabo tenetur amet ea minima doloribus quaerat. Alias, architecto.
                Autem cupiditate a porro? Possimus odit tempora eum fuga nesciunt, laborum molestias repudiandae sit praesentium iusto, eius distinctio culpa assumenda asperiores at! Nobis suscipit ipsa harum voluptate repellendus, impedit vitae!
                Mollitia voluptas excepturi tempora sequi illum reiciendis? Accusamus saepe exercitationem cumque harum autem, illum impedit ex veritatis expedita nam dignissimos. A consectetur ratione quaerat sint autem harum nihil fugiat aliquam.</p>
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s"
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay:"0.5s"
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay:"0.7s"
                    }}>
                        <AiFillYoutube/>
                        <p>YouTube</p>
                    </div>
                    <div style={{
                        animationDelay:"1s"
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
   
  )
}

export default Home
