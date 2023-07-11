import React from 'react'
import './Home.css'
import MovieCart from '../components/MovieCart/MovieCart'
import { ExpectedArr, ExtendedArr, MoviesArr, PopularArr } from '../components/MoviesArr/MoviesArr'

const Home = () => {
  const [trailersNum, setTrailersNum] = React.useState(2);
  const [moreMovies, setMoreMovies] = React.useState(false)

  const handleTrailersNum = (num: number) => {
    setTrailersNum(num)
  }

  const handleMoreMovies = () => {
    setMoreMovies((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <main>
      <section>
        <div className="kinoarea-new">
          <div className="kinoarea-new-caption d-f jc-sb align-center">
            <h3 className="kinoarea-new-title">Зараз у кіно</h3>
            <div><img src="images/line1.png" alt="line1" /></div>
            <div className="kinoarea-new-categories d-f align-center">
              <button className='categories-btn__active'>Всі</button>
              <button>Бойовики</button>
              <button>Пригоди</button>
              <button>Комедії</button>
              <button>Фантастика</button>
              <button>Трилери</button>
              <button>Драма</button>
            </div>
          </div>
          <div className="kinoarea-new-box d-f jc-sb">
            {
              MoviesArr.map((movie) => (
                <MovieCart
                  image={movie.image}
                  rating={movie.rating}
                  title={movie.title}
                  genre={movie.genre}
                />
              ))
            }
          </div>
          <div className={moreMovies ? "kinoarea-new-box d-f jc-sb" : "d-n"}>
            {
              ExtendedArr.map((movie) => (
                <MovieCart
                  image={movie.image}
                  rating={movie.rating}
                  title={movie.title}
                  genre={movie.genre}
                />
              ))
            }
          </div>
          <button className='kinoarea-new-btn' onClick={handleMoreMovies}> {moreMovies ? "Показати меньше" : "Всі новинки"} </button>
        </div>
      </section>
      <section>
        <div className="kinoarea-trailers">
          <div className="kinoarea-trailers-caption d-f jc-sb">
            <h3 className="kinoarea-trailers-title">Нові трейлери</h3>
            <div className="kinoarea-trailers-all d-f align-center">
              <h5>Усі трейлери</h5>
              <button><img src="images/arrow1.png" alt="arrow1" /></button>
            </div>

          </div>
          <div className={trailersNum === 1 ? "kinoarea-trailers-main" : "d-n"}>
            <div className="trailers-main-content">
              <iframe src="https://www.youtube.com/embed/zksjzsddjKg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="trailers-main-info d-f jc-sb">
              <div className="trailers-main-title">Мулан</div>
              <div className="trailers-main-actions d-f">
                <div>
                  <button><img src="images/like.png" alt="like" /></button>
                  <div className="trailers-main-likes">3245</div>
                </div>
                <div>
                  <button><img src="images/dislike.png" alt="dislike" /></button>
                  <div className="trailers-main-likes">420</div>
                </div>
              </div>
            </div>
          </div>
          <div className={trailersNum === 2 ? "kinoarea-trailers-main" : "d-n"}>
            <div className="trailers-main-content">
              <iframe src="https://www.youtube.com/embed/46sqefvYj-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="trailers-main-info d-f jc-sb">
              <div className="trailers-main-title">Форсаж 9</div>
              <div className="trailers-main-actions d-f">
                <div>
                  <button><img src="images/like.png" alt="like" /></button>
                  <div className="trailers-main-likes">3245</div>
                </div>
                <div>
                  <button><img src="images/dislike.png" alt="dislike" /></button>
                  <div className="trailers-main-likes">420</div>
                </div>
              </div>
            </div>
          </div>
          <div className={trailersNum === 3 ? "kinoarea-trailers-main" : "d-n"}>
            <div className="trailers-main-content">
              <iframe src="https://www.youtube.com/embed/2sJQ1eJ8OFg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className="trailers-main-info d-f jc-sb">
              <div className="trailers-main-title">Чорна вдова</div>
              <div className="trailers-main-actions d-f">
                <div>
                  <button><img src="images/like.png" alt="like" /></button>
                  <div className="trailers-main-likes">3245</div>
                </div>
                <div>
                  <button><img src="images/dislike.png" alt="dislike" /></button>
                  <div className="trailers-main-likes">420</div>
                </div>
              </div>
            </div>
          </div>
          <div className={trailersNum === 4 ? "kinoarea-trailers-main" : "d-n"}>
            <div className="trailers-main-content">
              <iframe src="https://www.youtube.com/embed/V3Zzx3smigo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className="trailers-main-info d-f jc-sb">
              <div className="trailers-main-title">Тихе місце 2</div>
              <div className="trailers-main-actions d-f">
                <div>
                  <button><img src="images/like.png" alt="like" /></button>
                  <div className="trailers-main-likes">3245</div>
                </div>
                <div>
                  <button><img src="images/dislike.png" alt="dislike" /></button>
                  <div className="trailers-main-likes">420</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kinoarea-trailers-box d-f jc-sb">
            <div className={trailersNum === 1 ? "kinoarea-trailers-item trailers-item__active" : "kinoarea-trailers-item"}  >
              <div className="trailers-item-main">
                <button onClick={() => handleTrailersNum(1)}><img src="images/play.png" alt="play" /></button>
              </div>
              <div className="trailers-item-title">Мулан</div>
            </div>
            <div className={trailersNum === 2 ? "kinoarea-trailers-item trailers-item__active" : "kinoarea-trailers-item"}>
              <div className="trailers-item-main">
                <button onClick={() => handleTrailersNum(2)}><img src="images/play.png" alt="play" /></button>
              </div>
              <div className="trailers-item-title">Форсаж 9</div>
            </div>
            <div className={trailersNum === 3 ? "kinoarea-trailers-item trailers-item__active" : "kinoarea-trailers-item"}>
              <div className="trailers-item-main">
                <button onClick={() => handleTrailersNum(3)}><img src="images/play.png" alt="play" /></button>
              </div>
              <div className="trailers-item-title">Чорна вдова</div>
            </div>
            <div className={trailersNum === 4 ? "kinoarea-trailers-item trailers-item__active" : "kinoarea-trailers-item"}>
              <div className="trailers-item-main">
                <button onClick={() => handleTrailersNum(4)}><img src="images/play.png" alt="play" /></button>
              </div>
              <div className="trailers-item-title">Тихе місце 2</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="kinoarea-popular">
          <div className='d-f jc-sb align-center'>
            <h3 className="kinoarea-popular-title">Популярні фільми</h3>
            <div><img src="images/line1.png" alt="line1" /></div>
            <div className="kinoarea-popular-years d-f">
              <div className="popular-years-item">Весь час</div>
              <div className="popular-years-item">2020</div>
              <div className="popular-years-item years-item__active">2019</div>
              <div className="popular-years-item">2018</div>
              <div className="popular-years-item">2017</div>
              <div className="popular-years-item">2016</div>
              <div className="popular-years-item">2015</div>
            </div>

          </div>
          <div className="kinoarea-popular-box d-f jc-sb">
            {
              PopularArr.map((movie) => (
                <MovieCart
                  image={movie.image}
                  rating={movie.rating}
                  title={movie.title}
                  genre={movie.genre}
                />
              ))
            }
          </div>
          <div className="kinoarea-popular-actions d-f">
            <button><img src="images/arrow-left.png" alt="arrow-left" /></button>
            <div className="kinoarea-popular-pages">4/15</div>
            <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
          </div>
        </div>
      </section>
      <section>
        <div className="kinoarea-persons">
          <div className='d-f jc-sb align-center'>
            <h3 className="kinoarea-persons-title">Популярні персони</h3>
            <div className="kinoarea-persons-periods d-f">
              <div className="persons-periods-item"> За рік</div>
              <div className="persons-periods-item"> За місяць</div>
              <div className="persons-periods-item periods-item__active"> За тиждень</div>
            </div>
          </div>
          <div className="kinoarea-persons-box d-f jc-sb">
            <div className="kinoarea-persons-item">
              <div className="persons-item-undertitle">1-е місце</div>
              <div className="persons-item-title">Кветін Тарантіно</div>
              <div className="persons-item-subtitle">Quentin Tarantino</div>
              <div className="persons-item-info">60 років</div>
            </div>
            <div className="kinoarea-persons-item">
              <div className="persons-item-undertitle">2-е місце</div>
              <div className="persons-item-title">Джейсон Стейтем</div>
              <div className="persons-item-subtitle">Jason Statham</div>
              <div className="persons-item-info">55 років</div>
            </div>
            <div className="kinoarea-persons-list">
              <div className='persons-list-item d-f jc-sb align-center'>
                <div>
                  <div className="persons-item-title">Тінто Брасс</div>
                  <div className="persons-list-subtitle">Giovanni Brass</div>
                  <div className="persons-item-info">90 років</div>
                </div>
                <div className="persons-item-undertitle">3-е місце</div>
              </div>
              <div className='persons-list-item d-f d-f jc-sb align-center'>
                <div>
                  <div className="persons-item-title">Джекі Чан</div>
                  <div className="persons-list-subtitle">Jackie Chan</div>
                  <div className="persons-item-info">69 років</div>
                </div>
                <div className="persons-item-undertitle">4-е місце</div>
              </div>
              <div className='persons-list-item d-f d-f jc-sb align-center'>
                <div>
                  <div className="persons-item-title">Том Гарді</div>
                  <div className="persons-list-subtitle">Tom Hardy</div>
                  <div className="persons-item-info">45 років</div>
                </div>
                <div className="persons-item-undertitle">5-е місце</div>
              </div>
              <div className='persons-list-item d-f d-f jc-sb align-center'>
                <div>
                  <div className="persons-item-title">Акшай Кумар</div>
                  <div className="persons-list-subtitle">Akshay Kumar</div>
                  <div className="persons-item-info">55 років</div>
                </div>
                <div className="persons-item-undertitle">6-е місце</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="kinoarea-news">
          <div className="d-f jc-sb align-center">
            <h3 className="kinoarea-news-title">Останні новини</h3>
            <div className="kinoarea-news-all d-f align-center">
              <h5>Всі новини</h5>
              <button><img src="images/arrow1.png" alt="arrow1" /></button>
            </div>
          </div>
          <div className="kinoarea-news-box d-f jc-sb">
            <div className="kinoarea-news-main">
              <div className="kinoarea-news-info d-f">
                <div className="kinoarea-news-date">15 квіт. 2020</div>
                <div className="kinoarea-news-watch">242</div>
                <div className="kinoarea-news-comment">14</div>
              </div>
              <div className="news-main-title">Не час вмирати. Перенесення релізу фільму</div>
              <p className="news-main-desc">
                Але дії представників опозиції рівною рівною мірою визначаються ними самими. У рамках специфікації сучасних стандартів,
                які прагнуть витіснити традиційне виробництво, нанотехнології вказані як претенденти на роль ключових факторів.
              </p>
            </div>
            <div className="kinoarea-news-list d-f">
              <div className="kinoarea-news-item">
                <div className="news-item-date">15 квіт. 2020</div>
                <div className="news-item-desc">Як змінили Сонік з останнього анонсу</div>
              </div>
              <div className="kinoarea-news-item">
                <div className="news-item-date">15 квіт. 2020</div>
                <div className="news-item-desc">Не час вмирати. Перенесення релізу фільму</div>
              </div>
              <div className="kinoarea-news-item">
                <div className="news-item-date">15 квіт. 2020</div>
                <div className="news-item-desc">Від цієї новини ви будете шоковані до завтра</div>
              </div>
              <div className="kinoarea-news-item">
                <div className="news-item-date">15 квіт. 2020</div>
                <div className="news-item-desc">Оце, звичайно, так!</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="kinoarea-expected">
          <div className="d-f jc-sb align-center">
            <h3 className="kinoarea-expected-title">Очікувані новинки</h3>
            <div className="kinoarea-expected-action d-f">
              <button><img src="images/arrow-left.png" alt="arrow-left" /></button>
              <div className="kinoarea-expected-pages">2/5</div>
              <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
            </div>
          </div>
          <div className="kinoarea-expected-box d-f jc-sb">
            {
              ExpectedArr.map((movie) => (
                <MovieCart
                  image={movie.image}
                  rating={movie.rating}
                  title={movie.title}
                  genre={movie.genre}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="kinoarea-revenue">
          <div className="d-f jc-sb align-center">
            <div className="kinoarea-revenue-caption d-f align-center">
              <h3 className="kinoarea-revenue-title">Касові збори</h3>
              <div className="kinoarea-revenue-periods">13 березня - 15 березня</div>
            </div>
            <div><img src="images/line1.png" alt="line1" /></div>
            <div className="kinoarea-revenue-countries d-f">
              <div className='revenue-countries-item'>Україна</div>
              <div className='revenue-countries-item countries-item__active'>Весь світ</div>
              <div className='revenue-countries-item'>США і Канада</div>
            </div>
          </div>
          <div className="kinoarea-revenue-box d-f jc-sb">
            <div className="kinoarea-revenue-item d-f align-center">
              <div><img src="images/revenue1.png" alt="revenue1" /></div>
              <div>
                <div className="revenue-item-title">1. Бладшот</div>
                <div className="revenue-item-earnings">$13 млн</div>
                <div className="revenue-item-total">$15 млн за 4 тижня</div>
              </div>
            </div>
            <div className="kinoarea-revenue-item d-f align-center">
              <div><img src="images/revenue2.png" alt="revenue2" /></div>
              <div>
                <div className="revenue-item-title">2. Вперед і в гору</div>
                <div className="revenue-item-earnings">$6.8 млн</div>
                <div className="revenue-item-total">$41.4 млн за 4 тижня</div>
              </div>
            </div>
            <div className="kinoarea-revenue-item d-f align-center">
              <div><img src="images/revenue3.png" alt="revenue3" /></div>
              <div>
                <div className="revenue-item-title">3. Людина-невидимка </div>
                <div className="revenue-item-earnings">$6.2 млн</div>
                <div className="revenue-item-total">$58.3 млн за 3 тижні</div>
              </div>
            </div>
            <div className="kinoarea-revenue-item d-f align-center">
              <div><img src="images/revenue4.png" alt="revenue4" /></div>
              <div>
                <div className="revenue-item-title">4. Сонік 2 </div>
                <div className="revenue-item-earnings">$2.9 млн</div>
                <div className="revenue-item-total">$15.1 млн за 4 тижня</div>
              </div>
            </div>
            <div className="kinoarea-revenue-item d-f align-center">
              <div><img src="images/revenue5.png" alt="revenue5" /></div>
              <div>
                <div className="revenue-item-title">5. Джентельмени </div>
                <div className="revenue-item-earnings">$1.8 млн</div>
                <div className="revenue-item-total">$78.7 млн за 11 тижнів</div>
              </div>
            </div>
          </div>
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

export default Home