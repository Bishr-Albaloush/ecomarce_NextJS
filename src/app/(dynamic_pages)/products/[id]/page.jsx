import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Post({ params }) {
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.postImage}
            src={data.thumbnail}
            alt=''
            fill={true}
          />
          <span className={styles.author}>{data.category}</span>

        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.content}>
          <div className={styles.gallery}>
            {data.images.map(image => (<Image
              key={data.id}
              src={image}
              alt={data.title}
              width={200}
              height={200}
            />))}

          </div>
          <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dignissimos doloremque mollitia, voluptas voluptates dolore. Similique dignissimos facere perspiciatis ut quo voluptates doloremque modi quam eius nesciunt. Quo quidem nobis voluptatem obcaecati perferendis? Ut quidem, iure consequatur voluptas eos accusamus similique, odit consequuntur nisi accusantium repellat perspiciatis nostrum, dolores aliquid molestias sapiente beatae odio officiis totam suscipit deserunt nam sed porro! Molestiae cupiditate eveniet quis ea odio beatae obcaecati quasi ab nobis provident quibusdam, ipsam reiciendis commodi quos, eius earum assumenda. Voluptates accusamus architecto explicabo corrupti fugit? Atque veritatis possimus, quasi vero rerum voluptas sint illo nostrum aut, eligendi consequuntur dignissimos amet. Quod, ducimus facere harum culpa eum aspernatur nisi provident labore animi distinctio. Perferendis optio eveniet voluptatibus vitae tenetur? Quo exercitationem laborum dolorem impedit, numquam nulla harum optio amet iste assumenda, itaque blanditiis. Sint, odio asperiores? Nobis impedit, praesentium explicabo tempore aperiam in deleniti officiis nihil blanditiis voluptate exercitationem distinctio sapiente non eligendi atque, dignissimos id saepe quis nostrum nisi laboriosam unde rem? Alias quibusdam soluta distinctio saepe repellendus quisquam. Dolores molestiae repellat dignissimos rem, harum itaque, temporibus nihil dicta incidunt mollitia labore aliquam quisquam modi voluptate rerum consequuntur alias porro tempora tenetur laboriosam delectus doloremque optio? Consequatur saepe illo id nesciunt ipsum vero praesentium fugit atque, amet enim ducimus quia rerum. Tempore quod velit nam, expedita eius accusamus dolorem repellendus ratione nulla quas voluptas hic porro voluptate sed saepe molestiae cum ex minima ducimus sit a ea sequi nisi illum? Laudantium animi dicta obcaecati suscipit repudiandae distinctio est!
          </p>
        </div>
      </div>
    </div>

  )
}
