const LandingPage = () => {
    return (
        <body>
            <main>

                <div class="start-website">
                    <div class="startWebsite-text">
                        <div>
                            <h1>CREATE YOUR WEBSITE WITH EASE</h1>
                        </div>
                        <div>
                            <p>Discover the platform that gives you the freedom to create, design, manage and
                                <br/>
                                develop your web presence exactly the way you want</p>
                        </div>
                    </div>

                    <div>
                        <div class="start-building">
                            <a href="#">Start building your website now</a>
                        </div>
                    </div>
                </div>


                <div class="special-features">
                    <div>
                        <img src={
                                require("../../assets/images/color-pelette.png")
                            }
                            alt=""
                            class="color-perlette"/>
                    </div>
                    <div>
                        <img src={
                                require("../../assets/images/Text-Customization.png")
                            }
                            alt=""
                            class="text-customization"/></div>
                    <div>
                        <img src={
                                require("../../assets/images/image-customization.png")
                            }
                            alt=""
                            class="image-customization"/></div>
                </div>


                <div class="reach-the-world">
                    <div class="reach-the-world-texts">
                        <div>
                            <h1>REACH FOR THE WORLD<br/>
                                WITH YOUR DIGITAL
                                <br/>
                                PRESENCE</h1>
                        </div>
                        <div>
                            <p>Our platform allows you to customize our carefully selected templates to suite your business and organizational goals.</p>
                        </div>
                    </div>
                    <div class="reach-the-world-image">
                        <div>
                            <img src={
                                    require("../../assets/images/do-more.png")
                                }
                                alt=""/></div>
                    </div>
                </div>


                <div class="design-without-stress">
                    <div class="container1">
                        <h3>Design your website with zero
                            <br/>
                            stress using THIRTIN</h3>
                    </div>

                    <div class="container2">
                        <div class="stress-free-image">
                            <img src={
                                    require("../../assets/images/stress-free-image.png")
                                }
                                alt=""/></div>
                        <div class="stress-free-text">
                            <div class="build-publish-reach">
                                <div class="build">
                                    <div>
                                        <h3>Build</h3>
                                    </div>
                                    <div>
                                        <p>Build sites for anything regardless of your skills and background knowledge. No matter if you are a beginner or professional, you can build a functional website without touching a line of code.</p>
                                    </div>
                                </div>
                                <div class="publish">
                                    <div>
                                        <h3>Publish</h3>
                                    </div>
                                    <div>
                                        <p>Launch your website on our secure domain. You don't need to worry about where to host your website, we've got you covered with our inbuilt classified domains.</p>
                                    </div>
                                </div>
                                <div class="reach">
                                    <div>
                                        <h3>Reach</h3>
                                    </div>
                                    <div>
                                        <p>Now, reach the world with your digital presence.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="btn">
                                    <a href="#">Start Building now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="start-building-here">

                    <div class="start-building-text">
                        <div class="start-building-h2-p">
                            <div>
                                <h2 class="start-building-h2">START BUILDING FROM HERE</h2>
                            </div>
                            <div>
                                <p class="start-building-p">Choose from our customizable templates. create your niche with
                                    <br/>
                                    just a click.</p>
                            </div>
                        </div>
                        <div>
                            <div class="start-building-btn">
                                <a href="#">View Template</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="display-templates">

                    <div class="first-template-row">
                        <div class="first-card">
                            <div>
                                <img src={
                                        require("../../assets/images/profile-card.png")
                                    }
                                    alt="images"/></div>
                            <div>
                                <a href="#" class="profile-card">Profile Card Template</a>
                            </div>
                        </div>


                        <div class="second-card">
                            <div>
                                <img src={
                                        require("../../assets/images/portfolio.png")
                                    }
                                    alt="images"/></div>
                            <div>
                                <a href="#" class="profile-card">Portfolio Website Template</a>
                            </div>
                        </div>


                        <div class="third-card">
                            <div>
                                <img src={
                                        require("../../assets/images/business-website.png")
                                    }
                                    alt="images"/></div>
                            <div>
                                <a href="#" class="profile-card">Business Website Template</a>
                            </div>
                        </div>
                    </div>


                    <div class="second-template-row">
                        <div class="fourth-card">
                            <div>
                                <img src={
                                        require("../../assets/images/business-website.png")
                                    }
                                    alt="images"/></div>
                            <div>
                                <a href="#" class="profile-card">Portfolio Website Template</a>
                            </div>
                        </div>


                        <div class="fifth-card">
                            <div>
                                <img src={
                                        require("../../assets/images/business-website.png")
                                    }
                                    alt="images"/></div>
                            <div>
                                <a href="#" class="profile-card">Business Website Template</a>
                            </div>
                        </div>

                        <div class="sixth-card">
                            <div>
                                <img src={
                                        require("../../assets/images/profile-card.png")
                                    }
                                    alt="images"/></div>
                            <div>
                                <a href="#" class="profile-card">Profile Card Template</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="help-desk">
                    <div class="help-text">
                        <div>
                            <h1>What help do you need With your website?</h1>
                        </div>
                        <div class="message-field">
                            <div>
                                <input type="text" class="message" placeholder="Send us a message"/></div>
                            <div>
                                <a href="#">
                                    <img src={
                                            require("../../assets/images/send.png")
                                        }
                                        alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}
export default LandingPage