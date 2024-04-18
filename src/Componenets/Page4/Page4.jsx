import React from 'react'

const Page4 = () => {
  return (
    <div className='container'>
        <h1 className='h3'>Biz bilan bog'lanish</h1>
        <article className="home">
        <div className="box3">
            <article>
            <h2 className='est'>Biz bilan bog'lanish uchun emailingizni qoldiring !</h2>
            <p>Biz sizning so'rovingizni qabul qilib siz tez orada uzimiz  bilan aloqaga chiqamiz . Iltimos Kuting !</p>
            </article>
            <form className='inp'>
            <input type="email" placeholder='Iltimos email adresingizni kiriting ' />
            <button className="bts">Submit</button>
            </form>
        </div>
        </article>
    </div>
  )
}

export default Page4
