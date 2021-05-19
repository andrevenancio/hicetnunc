export default function Home() {
  return <p>Next.js</p>
}

// export async function getServerSideProps() {
//   const page = 1
//   const { pages, results } = await fetch(
//     `${process.env.DOMAIN}/api/fake-data/30/${page}`
//   ).then((e) => e.json())

//   return {
//     props: { tokens: results, pages },
//   }
// }
