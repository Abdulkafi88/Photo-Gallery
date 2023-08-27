const btnEl = document.getElementById("btn")
const errorMessageEl = document.getElementById("errorMessage")
const galleryEl = document.getElementById("gallery")
const input = document.getElementById("input")
const accessKey = `mBA83_djYl7qinFSmcuoq0mXdFQTZLRwbANtwgIcBSA`
btnEl.addEventListener("click", () => {
  pics()
})

async function pics() {
  const random = Math.floor(Math.random() * 11)
  const userValue = input.value
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=${userValue}&query=landscape&client_id=${accessKey}&random=${random}`
  )
  const data = await res.json()
  const only = data.results.map((item) => item.urls.small)
   galleryEl.innerHTML = ""
   only.forEach(imgInfo=>{
    const img = document.createElement('img')
    img.src = imgInfo
    galleryEl.appendChild(img)
    console.log(galleryEl)
   })

}
