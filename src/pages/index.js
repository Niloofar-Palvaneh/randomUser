import Image from "next/image";
import { useState, useEffect } from "react"

export default function Home() {
  const [userInfo, setUserInfo] = useState(null)
  console.log(userInfo);

  const getRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then(res => {
        return res.json()
      })
      .then(datas => {
        setUserInfo(datas)
      })
  }
  useEffect(() => {
    getRandomUser()
  }, [])

  const getRandomUserHandler = () => {
    setUserInfo(null)
    getRandomUser()
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className=" w-[400px] flex flex-col gap-12 bg-white rounded-xl overflow-hidden ">
          <div className=" flex items-center justify-center w-full bg-[url('/bg-card.svg')] bg-center h-[150px] relative">
            <div className=" flex items-center justify-center ">
              <Image width={110} height={110} alt="profile" className="rounded-full border shadow absolute  top-24 border border-4 border-white"
                src={userInfo ? (userInfo.results[0].picture.medium) : "/load.gif"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-center w-full">
              <h6 className="text-gray-900 text-xl font-bold">
                {userInfo ? (userInfo.results[0].name.first) : ("loading...")}
                <span>   </span>
                {userInfo ? (userInfo.results[0].name.last) : ("loading...")}
                <span>   </span>
                <span className="text-gray-400 text-sm ml-2">
                  {userInfo ? (userInfo.results[0].dob.age) : ("loading...")}
                </span>
                <span className="text-gray-400 text-sm ml-2 block text-center italic">
                  {userInfo ? (userInfo.results[0].location.country) : ("loading...")}
                </span>
              </h6>
            </div>

            <div className="bg-gray-200 w-full h-[3px]"></div>

            <div className="flex items-center justify-between p-2">

              <div className="flex flex-col items-center justify-between w-full">
                <h6 className="text-gray-900 font-bold">
                  {userInfo ? (userInfo.results[0].gender) : ("loading...")}
                </h6>
                <h5 className=" text-gray-400">Gender</h5>
              </div>

              <div className="flex flex-col items-center justify-between w-full">
                <h6 className="text-gray-900 font-bold">
                  {userInfo ? (userInfo.results[0].dob.age) : ("loading...")}
                </h6>
                <h5 className=" text-gray-400">Age</h5>
              </div>
              <div className="flex flex-col items-center justify-between w-full">
                <h6 className="text-gray-900 font-bold">
                  {userInfo ? (userInfo.results[0].email) : ("loading...")}
                </h6>
                <h5 className="text-gray-400">Email</h5>
              </div>

            </div>
          </div>

          <button className="bg-blue-800 text-white rounded p-2 hover:bg-blue-900 hover:text-red-100 outline-none"
            onClick={getRandomUserHandler}
          >
            {userInfo ? "update infos" : "loading..."}
          </button>
        </div>
      </div>
    </>
  )
}
