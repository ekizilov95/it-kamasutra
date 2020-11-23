import React from 'react';

const Content = () => {
    return (
        <main className="content">
          <div className="content__poster">
            <img src="https://www.kpi.kharkov.ua/rus/wp-content/uploads/sites/3/2016/10/it-1.jpg" alt="poster"/>
          </div>
          <div className="content__user user">
            <div className="user__info">
              <div className="user__avatar">
                <img src="https://i2.wp.com/itc.ua/wp-content/uploads/2020/07/it-ukraine-color-1.jpg" alt="user"/>
              </div>
            </div>
          </div>
        </main>
    )
}

export default Content;