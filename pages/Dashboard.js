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

                    <div className="cards flex flex-row gap-[17px] w-full ">

                        <div className="card max-w-[230px] flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#7FCD93] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={RevenueIcon} height={18} width={18} className=" translate-y-[-2px]" />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Revenues</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > $2,129,430 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+2.5%</span> </div>

                            </div>

                        </div>

                        <div className="card max-w-[230px] flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#DEBF85] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={TransactionIcon} height={18} width={18} />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Transactions</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > 1,520 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+1.7%</span> </div>

                            </div>

                        </div>

                        <div className="card max-w-[230px] flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#ECA4A4] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={LikesIcon} height={18} width={18} />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Likes</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > 9,721 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+1.4%</span> </div>

                            </div>

                        </div>

                        <div className="card max-w-[230px] flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">

                            <div className="icon bg-[#A9B0E5] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={UserIcon} height={18} width={18} />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]" >Total Users</p>

                            <div className="revenue flex flex-row gap-[18px]">

                                <span className=" font-open_sans font-bold text-[21px]" > 9,721 </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center"> <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]" >+4.2%</span> </div>

                            </div>

                        </div>

                    </div>

                    <div className="act-card w-full bg-[#fff] rounded-[10px] py-[30px] px-[40px]">

                        <div className=" overflow-hidden">

                            <div className="header flex flex-row justify-between items-center">

                                <div  >
                                    <p className=" font-primary text-[18px] font-bold" >
                                        Activities
                                    </p>
                                    <p className=" font-primary text-[14px] font-normal text-[#858585]" >May - June 2021</p>

                                </div>

                                <div className="legened flex flex-row justify-center items-center">

                                    <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#E9A0A0] rounded-full">  </div>
                                    <p className=" font-secondary text-[14px] mr-[35px]"> Guest </p>

                                    <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#9BDD7C] rounded-full">  </div>
                                    <p className=" font-secondary text-[14px] mr-[35px]"> User </p>

                                </div>

                            </div>

                            <div className="graphs absolute w-[70%] z-10 mt-[30px] flex flex-row items-baseline justify-center gap-[110px] pl-[14px]">

                                <div className="graph1 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">

                                    <div className="flex flex-row gap-[10px] items-baseline" >

                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[200px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[80px] w-[38px] "></div>

                                    </div>

                                    <p>Week 1</p>
                                </div>

                                <div className="graph2 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">

                                    <div className="flex flex-row gap-[10px] items-baseline" >

                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[152px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[168px] w-[38px] "></div>

                                    </div>

                                    <p>Week 2</p>
                                </div>

                                <div className="graph3 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">

                                    <div className="flex flex-row gap-[10px] items-baseline" >

                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[80px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[120px] w-[38px] "></div>

                                    </div>

                                    <p>Week 3</p>
                                </div>

                                <div className="graph4 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">

                                    <div className="flex flex-row gap-[10px] items-baseline" >

                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[160px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[128px] w-[38px] "></div>

                                    </div>

                                    <p>Week 4</p>
                                </div>

                            </div>

                            <div className="chart flex flex-col  translate-x-[-20px]">

                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">

                                    <p className="mr-[15px] tezt-[14px]" >500</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />

                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">

                                    <p className="mr-[15px] tezt-[14px]" >400</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />

                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">

                                    <p className="mr-[15px] tezt-[14px]" >300</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />

                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">

                                    <p className="mr-[15px] tezt-[14px]" >200</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />

                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">

                                    <p className="mr-[15px] tezt-[14px]" >100</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />

                                </div>

                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">

                                    <p className="mr-[15px] tezt-[14px]" >0</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />

                                </div>

                            </div>



                        </div>


                    </div>

                </main>

            </section>

        </>
    )
}
