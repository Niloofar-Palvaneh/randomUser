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
        <div className="border shadow p-8 w-[400px] flex flex-col gap-12 bg-white rounded  ">
          <div className="flex items-center justify-center w-full">
            <Image width={110} height={110} alt="profile" className="rounded-full"
            src={userInfo ? (userInfo.results[0].picture.medium) : "/load.gif"}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between w-full">
              <h5 className="font-bold text-gray-500">FirstName:</h5>
              <h6 className="text-red-800 font-bold">
                {userInfo ? (userInfo.results[0].name.first) : ("loading...")}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full">
              <h5 className="font-bold text-gray-500">LastName:</h5>
              <h6 className="text-red-800 font-bold">
                {userInfo ? (userInfo.results[0].name.last) : ("loading...")}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full">
              <h5 className="font-bold text-gray-500">Gender:</h5>
              <h6 className="text-red-800 font-bold">
                {userInfo ? (userInfo.results[0].gender) : ("loading...")}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full">
              <h5 className="font-bold text-gray-500">Age:</h5>
              <h6 className="text-red-800 font-bold">
                {userInfo ? (userInfo.results[0].dob.age) : ("loading...")}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full">
              <h5 className="font-bold text-gray-500">Email:</h5>
              <h6 className="text-red-800 font-bold">
                {userInfo ? (userInfo.results[0].email) : ("loading...")}
              </h6>
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
