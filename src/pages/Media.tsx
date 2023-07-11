import React from 'react'
import './Media.css'
import { ExtendedArr, MoviesArr } from '../components/MoviesArr/MoviesArr'

const Media = () => {
    const [moreTrailers, setMoreTrailers] = React.useState(false)
    const [morePosters, setMorePosters] = React.useState(false)
    const [moreFrames, setMoreFrames] = React.useState(false)

    const handleMoreTrailers = ()=> {
        setMoreTrailers((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMorePosters = ()=> {
        setMorePosters((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMoreFrames = ()=> {
        setMoreFrames((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <section>
                <div className="media-main d-f jc-sb align-center">
                    <h2 className="media-main-title">Медіа</h2>
                    <div><img src="images/line1.png" alt="line1" /></div>
                    <div className="media-main-categories d-f">
                        <div className="main-categories-item categories-item__active">Трейлери</div>
                        <div className="main-categories-item">Постери</div>
                        <div className="main-categories-item">Кадри</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="media-trailers">
                    <h3 className="media-bl-title">Трейлери</h3>
                    <div className="media-trailers-box d-f jc-sb">
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/V02lqEpbk2Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Будинок біля озера</div>
                                <div className="trailers-main-date">24 квіт. 2006</div>
                                <div className="trailers-main-watch">97</div>
                                <div className="trailers-main-time">1:43</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/t4OGIKwTqdI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Шазам! Лють Богів</div>
                                <div className="trailers-main-date">18 квіт. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">2:18</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/1vCeo7XB-Xw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Людина-мураха та Оса: Квантоманія</div>
                                <div className="trailers-main-date">17 лют. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">2:23</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/k_jXwj2Djoo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Смерть семи королів</div>
                                <div className="trailers-main-date">14 квіт. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">1:00</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/BDuWBFSFmBk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Операція «Фортуна»: Мистецтво перемоги</div>
                                <div className="trailers-main-date">3 бер. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">3:09</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/4-zipl_QIVc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Біґ Мак: Гангстери й золото</div>
                                <div className="trailers-main-date">30 бер. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">1:19</div>
                            </div>
                        </div>
                    </div>
                    <div className={moreTrailers ?  "media-trailers-box d-f jc-sb" : "d-n"}>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/V02lqEpbk2Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Будинок біля озера</div>
                                <div className="trailers-main-date">24 квіт. 2006</div>
                                <div className="trailers-main-watch">97</div>
                                <div className="trailers-main-time">1:43</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/t4OGIKwTqdI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Шазам! Лють Богів</div>
                                <div className="trailers-main-date">18 квіт. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">2:18</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/1vCeo7XB-Xw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Людина-мураха та Оса: Квантоманія</div>
                                <div className="trailers-main-date">17 лют. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">2:23</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/k_jXwj2Djoo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Смерть семи королів</div>
                                <div className="trailers-main-date">14 квіт. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">1:00</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/BDuWBFSFmBk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Операція «Фортуна»: Мистецтво перемоги</div>
                                <div className="trailers-main-date">3 бер. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">3:09</div>
                            </div>
                        </div>
                        <div className="media-trailers-item">
                            <div className="trailers-main-content">
                                <iframe src="https://www.youtube.com/embed/4-zipl_QIVc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                            <div className="trailers-main-info d-f">
                                <div className="trailers-main-title">Біґ Мак: Гангстери й золото</div>
                                <div className="trailers-main-date">30 бер. 2023</div>
                                <div className="trailers-main-watch">103</div>
                                <div className="trailers-main-time">1:19</div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleMoreTrailers}>{moreTrailers ? "Показати меньше" : "Показати ще"}</button>
                </div>
            </section>
            <section>
                <div className="media-posters">
                    <h3 className="media-bl-title">Постери</h3>
                    <div className="media-posters-box d-f jc-sb">
                        {
                            MoviesArr.map((movie) => (
                                <div className="media-posters-item">
                                    <div className="posters-item-img"><img src={movie.image} alt="movie-poster" /></div>
                                    <div className="posters-item-title">{movie.title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="media-posters-box d-f jc-sb">
                        {
                            ExtendedArr.map((movie) => (
                                <div className="media-posters-item">
                                    <div className="posters-item-img"><img src={movie.image} alt="movie-poster" /></div>
                                    <div className="posters-item-title">{movie.title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={morePosters ? "media-posters-box d-f jc-sb" : "d-n"}>
                        {
                            MoviesArr.map((movie) => (
                                <div className="media-posters-item">
                                    <div className="posters-item-img"><img src={movie.image} alt="movie-poster" /></div>
                                    <div className="posters-item-title">{movie.title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={morePosters ? "media-posters-box d-f jc-sb" : "d-n"}>
                        {
                            ExtendedArr.map((movie) => (
                                <div className="media-posters-item">
                                    <div className="posters-item-img"><img src={movie.image} alt="movie-poster" /></div>
                                    <div className="posters-item-title">{movie.title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={handleMorePosters}>{morePosters ? "Показати меньше" : "Показати ще"}</button>
                </div>
            </section>
            <section>
                <div className="media-frames">
                    <h3 className="media-bl-title">Кадри</h3>
                    <div className="media-frames-box d-f jc-sb">
                        <div className="media-frames-item">
                            <div><img src="images/frames1.png" alt="frames1" /></div>
                            <h5>Втеча з Шоушенка</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames2.png" alt="frames2" /></div>
                            <h5>Зелена миля</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames3.png" alt="frames3" /></div>
                            <h5>Форрест Ґамп</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames4.png" alt="frames4" /></div>
                            <h5>Список Шиндлера</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames5.png" alt="frames5" /></div>
                            <h5>1+1</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames6.png" alt="frames6" /></div>
                            <h5>Початок</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames7.png" alt="frames7" /></div>
                            <h5>Леон</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames8.png" alt="frames8" /></div>
                            <h5>Бійцівський клуб</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames9.png" alt="frames9" /></div>
                            <h5>Життя прекрасне</h5>
                        </div>
                    </div>
                    <div className={moreFrames ? "media-frames-box d-f jc-sb" : "d-n"}>
                        <div className="media-frames-item">
                            <div><img src="images/frames1.png" alt="frames1" /></div>
                            <h5>Втеча з Шоушенка</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames2.png" alt="frames2" /></div>
                            <h5>Зелена миля</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames3.png" alt="frames3" /></div>
                            <h5>Форрест Ґамп</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames4.png" alt="frames4" /></div>
                            <h5>Список Шиндлера</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames5.png" alt="frames5" /></div>
                            <h5>1+1</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames6.png" alt="frames6" /></div>
                            <h5>Початок</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames7.png" alt="frames7" /></div>
                            <h5>Леон</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames8.png" alt="frames8" /></div>
                            <h5>Бійцівський клуб</h5>
                        </div>
                        <div className="media-frames-item">
                            <div><img src="images/frames9.png" alt="frames9" /></div>
                            <h5>Життя прекрасне</h5>
                        </div>
                    </div>
                    <button onClick={handleMoreFrames}>{moreFrames ? "Показати меньше" : "Показати ще"}</button>
                </div>
            </section>
            <section>
                <div className="kinoarea-message">
                    <div><img src="images/logo.png" alt="logo" /></div>
                    <div className="kinoarea-message-title">Підпишіться на E-mail розсилку</div>
                    <div className="kinoarea-message-subtitle">
                        Якщо хоче бути в курсі останніх новин та новинок кіно - заповніть форму нижче та оформіть безкоштовну E-mail розсилку!
                    </div>
                    <form action="" className="kinoarea-message-fm">
                        <div className="submit-bl d-f">
                            <input type="email" name="email" placeholder='Введіть свою e-mail адресу' />
                            <button>Підписатися</button>
                        </div>
                        <div className="agree-bl d-f align-center">
                            <input type="checkbox" name="agree" id="agree" />
                            <label htmlFor="agree">Погоджуюсь на умови політики конфіденційності</label>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Media