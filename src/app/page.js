"use client";
import { Image } from "@nextui-org/image";

import "./globals.css";
import { Button } from "@nextui-org/react";
import MenuIcon from "@rsuite/icons/Menu";
import { Avatar } from "rsuite";
export default function Home() {
  return (
    <>
      <div className="bg-yellow-400 min-h-[85vh] w-screen font-General">
        <div className="flex flex-col md:flex-row w-full h-16 text-black text-2xl font-bold items-center justify-between px-6 py-4">
          <div className="flex flex-col md:flex-row md:space-x-10 items-center space-y-4 md:space-y-0">
            <MenuIcon className="cursor-pointer" />
            <p className="cursor-pointer">Our chef</p>
            <p className="cursor-pointer">Order a meal</p>
            <p className="cursor-pointer">How it works</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="cursor-pointer">My cart</p>
            <Avatar circle className="h-8" />
          </div>
        </div>
        <div className="h-auto custom-bg w-full flex flex-col space-y-12 items-center justify-center py-8">
          <div className="bg-yellow-400 font-bold text-2xl text-black w-full h-auto flex flex-col items-center justify-center py-8">
            <h1 className="text-4xl md:text-6xl font-Title text-center">
              Home Food Cravings
            </h1>
            <p className="font-Other text-2xl md:text-4xl text-center">
              Delicious home-cooked food every day
            </p>
          </div>
          <Button className="bg-yellow-400 text-black text-xl font-bold py-2 px-4">
            Order Now
          </Button>
        </div>
      </div>

      <div className="bg-black min-h-[85vh] w-screen space-y-10 font-General">
        <div className="w-full flex items-center justify-center h-[10vh]">
          <h1 className="font-bold mt-10 font-Title text-yellow-400 text-4xl md:text-5xl">
            Our chefs
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 px-5">
          <div className="flex flex-col items-center justify-center m-5 p-5 space-y-5">
            <Image
              width={300}
              alt="NextUI hero Image"
              src="https://www.shutterstock.com/image-photo/african-american-female-chef-having-600nw-2150289105.jpg"
            />
            <h1 className="font-bold text-2xl md:text-3xl font-Other text-yellow-400">
              Chef Saanvi Mishra
            </h1>
            <p className="text-center text-sm md:text-base">
              Cooking is my passion and creative outlet. I love blending
              traditional recipes with modern flavors to create delightful
              dishes. Join me in my kitchen for a culinary journey filled with
              love, creativity, and unforgettable meals.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center m-5 p-5 space-y-5">
            <Image
              width={300}
              alt="NextUI hero Image"
              src="https://media.istockphoto.com/id/1454538758/photo/mature-sikh-man-with-turban-in-a-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=m61mlu2hv6TMhxkxCZjAda3l6bdIY_BzWl0ZVmfGb7E="
            />
            <h1 className="font-bold text-2xl md:text-3xl font-Other text-yellow-400">
              Chef Gagan Singh
            </h1>
            <p className="text-center text-sm md:text-base">
              Growing up in Punjab, I have always been surrounded by vibrant
              flavors and rich culinary traditions. Cooking is my way of sharing
              the essence of Punjabi culture with the world. From hearty curries
              to flavorful tandoori dishes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center m-5 p-5 space-y-5">
            <Image
              width={300}
              alt="NextUI hero Image"
              src="https://media.istockphoto.com/id/1457876584/photo/portrait-of-a-young-woman-cooking-food-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=JKFlovKfUNGtug_n5GOfCsq3_7IUBNVzhF34egX_mDQ="
            />
            <h1 className="font-bold text-2xl md:text-3xl font-Other text-yellow-400">
              Chef Ishani Biswas
            </h1>
            <p className="text-center text-sm md:text-base">
              Desserts are my passion and my art form. I find immense joy in
              crafting sweet creations that bring smiles and delight to
              everyone. Join me on a sugary journey where every bite is a piece
              of happiness.
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col md:flex-row justify-between items-center w-screen h-auto md:h-[85vh] px-6 py-12 bg-yellow-500">
        <div className="flex flex-col items-center md:w-1/2 p-4 font-General text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-Title">
            OUR MISSION
          </h2>
          <p className="text-xl md:text-2xl text-black w-[90%] md:w-[70%] border-4 border-black p-4">
            To cultivate a thriving community where home cooks can share their
            culinary passion, fostering connections by offering authentic,
            home-style meals that satisfy the deepest cravings for comfort and
            connection.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-between items-center font-General bg-black-400 p-8 rounded-t-3xl w-screen">
        <div className="flex flex-col items-center md:w-[45%] text-center px-6 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-Title">
            Cause food requires more than{" "}
            <span className="text-yellow-500 italic font-Title">taste</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At HFC we believe that food should be more than taste; it should
            have that warmth that we find in home-cooked meals.
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-xl font-semibold"
          >
            Order Now
          </a>
        </div>
        <div className="flex flex-col bg-white text-black m-10 p-10 md:w-[45%] rounded-lg">
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-black text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">
                1
              </div>
              <h2 className="ml-4 text-xl md:text-2xl font-bold">
                Fresh, Seasonal Ingredients
              </h2>
            </div>
            <p className="ml-12">
              Our menu follows the seasons, featuring the best local produce
              available.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <div className="bg-black text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">
                2
              </div>
              <h2 className="ml-4 text-xl md:text-2xl font-bold">
                Comfort Food, Elevated
              </h2>
            </div>
            <p className="ml-12">
              We have simple crowd-favorites on the menu - but we do them well.
              Our flavors stand out, guaranteed.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <div className="bg-black text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">
                3
              </div>
              <h2 className="ml-4 text-xl md:text-2xl font-bold">
                Quick Services
              </h2>
            </div>
            <p className="ml-12">
              Enjoy fast, reliable order processing, timely deliveries,
              efficient customer support, real-time order tracking, and easy
              payment options.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 min-h-screen font-General">
        <div className="w-full flex items-center justify-center h-1/10">
          <h1 className="text-4xl font-bold mt-10 font-Title text-black">
            How it works
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center h-9/10 space-y-6 md:space-y-0 md:space-x-10">
          <div className="bg-white rounded-lg w-full md:w-[20%] lg:w-[25%] h-60 md:h-[60%] overflow-hidden shadow-lg">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2882814.jpg&f=1&nofb=1&ipt=8d133cca6adb6093bb2493592baf1cd857e67adf77658a2a2b72e075087e60cb&ipo=images"
              alt="Explore"
              className="w-full h-48 md:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">Explore</h2>
              <p className="text-black">
                Packed with flavor and cooked to perfection
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full md:w-[20%] lg:w-[25%] h-60 md:h-[60%] overflow-hidden shadow-lg">
            <img
              src="https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg"
              alt="Order"
              className="w-full h-48 md:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">Order</h2>
              <p className="text-black">
                Packed with flavor and cooked to perfection
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full md:w-[20%] lg:w-[25%] h-60 md:h-[60%] overflow-hidden shadow-lg">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUgA_5V3Jro0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=2751870145f2a514a01da3e43ffb5d43b2ed6403a2b4c67e149abece4444952c&ipo=images"
              alt="Deliver"
              className="w-full h-48 md:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">Deliver</h2>
              <p className="text-black">
                Paired with dipping sauces that are too good to pass up
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full md:w-[20%] lg:w-[25%] h-60 md:h-[60%] overflow-hidden shadow-lg">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F276%2F276363.jpg&f=1&nofb=1&ipt=72eb6892b87c83674d55eab7d540a43e60e6ec716f0ecb6c4c4f9c78668254bc&ipo=images"
              alt="Enjoy"
              className="w-full h-48 md:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">Enjoy</h2>
              <p className="text-black">
                Choose from classic blends and unique concoctions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex font-General flex-col bg-black h-[85vh] w-screen md:flex-row items-center justify-center m-4 p-4">
        <div className="m-10 md:mb-0">
          <h1 className="text-6xl font-bold text-yellow-400 mb-4 font-Title">
            On the Menu
          </h1>
          <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600">
            VIEW FULL MENU
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-[50vh] items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg"
              alt="Aloo Paratha"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">
                Aloo Paratha
              </h2>
              <p className="text-black">
                Packed with flavor and cooked to perfection
              </p>
            </div>
          </div>
          <div className="bg-yellow-400 text-black rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg"
              alt="Samosa W/ Chutney"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">
                Samosa W/ Chutney
              </h2>
              <p className="text-black">
                Paired with dipping sauces that are too good to pass up
              </p>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4IBMLJRAfP3nw3_r1uVRhpxSsaAiTERcag&s"
              alt="Oreo Freakshake"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-black font-bold mb-2">
                Oreo Freakshake
              </h2>
              <p className="text-black">
                Choose from classic blends and unique concoctions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[85vh] font-General w-screen">
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
              <div>
                <h2 className="font-bold mb-4 font-Title">Company</h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold mb-4 font-Title text-xl">
                  For Customer
                </h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline font-bold">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-bold">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-bold">
                      Cancellation and Refund
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-bold">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-bold">
                      Refer & Earn
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold mb-4 font-Title text-xl">Know Us</h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline font-bold">
                      Order a Meal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Subscription Plans
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold mb-4 font-Title text-xl">
                  For HomeChefs
                </h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Calling HomeChef
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      HomeChef Login
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold mb-4 font-Title text-xl">
                  Reach Us At
                </h2>
                <ul>
                  <li>
                    <a
                      href="tel:+919136355099"
                      className="flex items-center hover:underline"
                    >
                      <span className="mr-2">📞</span>+91 9136355099
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+919372585749"
                      className="flex items-center hover:underline"
                    >
                      <span className="mr-2">📞</span>+91 93725 85749
                    </a>
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href="#" aria-label="Email">
                    <img
                      src="./path/to/email-icon.png"
                      alt="Email"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <img
                      src="./path/to/facebook-icon.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <img
                      src="./path/to/instagram-icon.png"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <img
                      src="./path/to/linkedin-icon.png"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <img
                      src="./path/to/twitter-icon.png"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-bold mb-4 font-Title text-xl">Subscribe</h2>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="p-2 rounded-l bg-white text-black flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-500 text-black p-2 rounded-r"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div>
                <h2 className="font-bold mb-4 font-Title text-xl">
                  Serviceable Location
                </h2>
                <p>
                  <a href="#" className="hover:underline">
                    Homemade food Andheri East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Andheri West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Bandra East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Bandra West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food BKC
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Borivali East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Borivali West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Kandivali
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Chembur
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Dadar East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Dadar West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Dahisar East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Dahisar West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Ghatkopar East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Ghatkopar West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Goregaon East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Goregaon West
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Jogeshwari East
                  </a>{" "}
                  |
                  <a href="#" className="hover:underline">
                    Homemade food Jogeshwari West
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
