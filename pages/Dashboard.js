import Navbar from "@/components/Navbar"
import Image from "next/image"

import RevenueIcon from '../public/icons/revenue.svg'
import TransactionIcon from '../public/icons/transaction_icon.svg'
import LikesIcon from '../public/icons/Vector.svg'
import UserIcon from '../public/icons/user.svg'
import NotificationIcon from '../public/icons/notification.svg'
import profile from '../public/icons/profile.png'
import search from '../public/icons/Search.svg'

export default function Dashboard() {

    return (
        <>
            <section className="dashboard flex-row justify-start py-[3vh] px-[43px] gap-[67px]">

                <Navbar />

                <main className=" min-h-[90vh] w-[100%] min-w-max  flex justify-start items-start flex-col gap-[40px]" >

                    <div className="header flex justify-between items-center flex-row w-full">

                        <h3 className=" font-primary text-[24px] font-bold" >Dashboard</h3>

                        <div className="headerPart flex justify-center items-center flex-row">

                            <div className="inp bg-[#fff] mr-[14px] flex justify-center items-center flex-row px-[15px] py-[7px] rounded-[10px] ">
                                <input type="text" name=" " id="" placeholder="Search..." />
                                  <Image src={search} width={12} height={12} />  

                            </div>

                            <Image className="mr-[28px]" src={NotificationIcon} width={18} height={18} />

                            <div className="profile">
                                <Image src={profile} width={30} height={30} />
                            </div>

                        </div>

                    </div>

                    <div className="cards flex flex-row gap-[17px] w-full">

                        <div className="card flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#7FCD93] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={RevenueIcon} height={18} width={18} className=" translate-y-[-2px]" />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Revenues</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > $2,129,430 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+2.5%</span> </div>

                            </div>

                        </div>

                        <div className="card flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#DEBF85] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={TransactionIcon} height={18} width={18}  />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Transactions</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > 1,520 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+1.7%</span> </div>

                            </div>

                        </div>

                        <div className="card flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#ECA4A4] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={LikesIcon} height={18} width={18}  />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Likes</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > 9,721 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+1.4%</span> </div>

                            </div>

                        </div>

                        <div className="card flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#A9B0E5] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={UserIcon} height={18} width={18}  />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Users</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > 9,721 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+4.2%</span> </div>

                            </div>

                        </div>

                    </div>

                </main>

            </section>

        </>
    )
}
