import Image from "next/image"
export default function List() {
	let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
	let name = 'paasrk'
	let array = [2,3,4]
	array.map(()=>{})
  return (
    <div>
		<h4  className="title">상품목록</h4>
		{
		  상품.map((a,i)=>{
			  return(
			  	<div className="food" key={i}>
					  <img src={`/food${i}.png`} className='food-img'></img>
					<h4>{a} $40</h4>
				</div>
			  )
		  })
		}
		
	</div>
  )
}
