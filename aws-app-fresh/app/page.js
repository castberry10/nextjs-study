import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	let name = 'paasrk'
  return (
    <div>
		<h4 className="title" style={{color:'red', fontSize:'14px'}}>안녕</h4>
		<p className="title-sub">by {name}</p>
	</div>
  )
}
