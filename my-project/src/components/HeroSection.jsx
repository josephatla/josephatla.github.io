import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6x lg:text-7xl text-center tracking-wide">
            PT Toyoda Fiberglass
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Augue sem odio adipiscing interdum, volutpat iaculis. Laoreet bibendum at sed pellentesque mi egestas ut posuere convallis. Per consequat nostra lobortis gravida integer senectus aliquam. Venenatis porttitor velit porta nostra class inceptos laoreet ridiculus. Semper torquent litora aliquet varius aptent euismod placerat eros. Scelerisque habitasse integer fames torquent volutpat. Hendrerit efficitur at urna faucibus pretium.
        </p>
        <div className="flex mt-10 justify-center">
            <img className="rounded-lg w-1/2 mx-2 my-4" src= {pic1} alt="" />
            <img className="rounded-lg w-1/2 mx-2 my-4" src= {pic2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
