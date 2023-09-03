import Navbar from "@/components/Navbar";
import Image from "next/image";
import Script from "next/script";

import RevenueIcon from "../public/icons/revenue.svg";
import TransactionIcon from "../public/icons/transaction_icon.svg";
import LikesIcon from "../public/icons/Vector.svg";
import UserIcon from "../public/icons/user.svg";
import NotificationIcon from "../public/icons/notification.svg";
import profile from "../public/icons/profile.png";
import search from "../public/icons/Search.svg";
import RoundChart from "../public/icons/round-chart.svg";
import Controls from "../public/icons/Controls.svg";
import WhatsApp from "../public/icons/whatsApp-icon.png";
import Yt from "../public/icons/Chat.png";
import Mail from "../public/icons/Mail.png";
import Insta from "../public/icons/Software.png";

import { useState } from "react";
import { Duplex } from "stream";

export default function Dashboard() {

    const [profileData, setprofileData] = useState(undefined)
    const [data, setData] = useState(false)
    

    function handlebasic() {

        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value

        document.getElementById('contact').style.display = 'flex'
        document.getElementById('basic').style.display = 'none'

        document.getElementById('contact-border').style.borderBottomColor = '#3F84F8'
        document.getElementById('basic-border').style.borderBottomColor = '#D9D9D9'

        setprofileData({ name, email, phone })

    }

    function handlecontact() {

        let insta = document.getElementById('insta').value
        let yt = document.getElementById('yt').value

        let data = profileData
        data.insta = insta
        data.yt = yt

        setprofileData(data)
        setData(true)

        document.getElementById('modalContainer').style.display = 'none'
        document.body.style.overflow = 'auto'


    }


    function openModal() {

        document.getElementById('modalContainer').style.display = 'flex'

        window.scrollTo(0, 0)

        document.body.style.height = '100vh'
        document.body.style.overflow = 'hidden'

    }

    return (
        <>

            <section id="modalContainer" className="newProfile absolute bg-[#000] bg-opacity-50 z-50 w-full h-full  hidden">

                <div className="card bg-[#fff] rounded-[20px] w-[40%] ">

                    <div className="header flex justify-between items-center font-figtree text-[20px] px-[24px] font-[600] py-[16px] border-b-2 border-b-[#ccc]" >
                        <p> Add New Profile</p>
                        <Image className=" rotate-45" src={Controls} width={24} height={24} />
                    </div>

                    <div className="flex flex-row items-center justify-evenly w-full gap-[50px] px-[24px] pt-[24px]" >

                        <div id="basic-border" className="flex-1 border-b-4 border-b-blue min-w-[212px]  flex justify-center items-center ">
                            <p className="font-figtree text-[16px] font-[600] mb-[14px]" >Basic</p>
                        </div>

                        <div id="contact-border" className="flex-1 border-b-4 border-b-[#D9D9D9] min-w-[212px] flex justify-center items-center">
                            <p className="font-figtree text-[16px] font-[600] mb-[14px]" >Contact</p>
                        </div>

                    </div>

                    <div className="main">

                        <div id="basic" className="flex-col">


                            <div className="basic w-full p-[24px]">

                                <p>Enter Name*</p>
                                <input className="mt-[8px] px-[16px] py-[12px] border w-full rounded-[8px] font-figtree text-[16px] text-[#999CA0]" type="text" name="" id="name" placeholder="Eg. John Doe" />

                            </div>

                            <div className="basic w-full p-[24px]">

                                <p>Enter Email*</p>
                                <input className="mt-[8px] px-[16px] py-[12px] border w-full rounded-[8px] font-figtree text-[16px] text-[#999CA0]" type="text" name="" id="email" placeholder="Eg. John@xyz.com" />

                            </div>

                            <div className="basic w-full p-[24px]">

                                <p>Enter Phone*</p>
                                <input className="mt-[8px] px-[16px] py-[12px] border w-full rounded-[8px] font-figtree text-[16px] text-[#999CA0]" type="text" name="" id="phone" placeholder="Eg. 9123456789" />

                            </div>

                            <div className="w-full  flex justify-end p-[24px]">

                                <button className=" bg-[#3E84F8] py-[8px] px-[16px] rounded-[8px] flex justify-center items-center font-figtree text-[14px] text-[#fff]" onClick={handlebasic} > Next </button>

                            </div>

                        </div>

                        <div id="contact" className="hidden flex-col">


                            <div className=" w-full p-[24px]">

                                <p >Instagram Link <span className="text-[#999CA0]" > ( Optional ) </span></p>
                                <input className="mt-[8px] px-[16px] py-[12px] border w-full rounded-[8px] font-figtree text-[16px] text-[#999CA0]" type="text" name="" id="insta" placeholder="Eg. ..instagram.com/username" />

                            </div>

                            <div className=" w-full p-[24px]">

                                <p>YouTube Link <span className="text-[#999CA0]" >( Optional )</span></p>
                                <input className="mt-[8px] px-[16px] py-[12px] border w-full rounded-[8px] font-figtree text-[16px] text-[#999CA0]" type="text" name="" id="yt" placeholder="Eg. ..youtebe/username" />

                            </div>


                            <div className="w-full  flex justify-end p-[24px]">

                                <button className=" bg-[#fff] py-[8px] px-[16px] rounded-[8px] flex justify-center items-center font-figtree text-[14px] text-[#231F20] border mr-[8px]" > Back </button>

                                <button className=" bg-[#3E84F8] py-[8px] px-[16px] rounded-[8px] flex justify-center items-center font-figtree text-[14px] text-[#fff]" onClick={handlecontact} > Done </button>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            <section className="dashboard flex-row justify-start items-stretch py-[3vh] px-[43px] gap-[67px] ">
                <Navbar />

                <main className=" min-h-[90vh] w-[100%] min-w-max  flex justify-between items-start flex-col gap-[20px]">
                    <div className="header flex justify-between items-center flex-row w-full">
                        <h3 className=" font-primary text-[24px] font-bold">Dashboard</h3>

                        <div className="headerPart flex justify-center items-center flex-row">
                            <div className="inp bg-[#fff] mr-[14px] flex justify-center items-center flex-row px-[15px] py-[7px] rounded-[10px] ">
                                <input type="text" name=" " id="" placeholder="Search..." />
                                <Image src={search} width={12} height={12} />
                            </div>

                            <Image
                                className="mr-[28px]"
                                src={NotificationIcon}
                                width={18}
                                height={18}
                            />

                            <div className="profile">
                                <Image src={profile} width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="cards flex flex-row gap-[17px] w-full ">
                        <div className="card  flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">
                            <div className="icon bg-[#7FCD93] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image
                                    src={RevenueIcon}
                                    height={18}
                                    width={18}
                                    className=" translate-y-[-2px]"
                                />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]">
                                Total Revenues
                            </p>

                            <div className="revenue flex flex-row gap-[18px]">
                                <span className=" font-open_sans font-bold text-[21px]">
                                    {" "}
                                    $2,129,430{" "}
                                </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center">
                                    {" "}
                                    <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]">
                                        +2.5%
                                    </span>{" "}
                                </div>
                            </div>
                        </div>

                        <div className="card  flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">
                            <div className="icon bg-[#DEBF85] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={TransactionIcon} height={18} width={18} />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]">
                                Total Transactions
                            </p>

                            <div className="revenue flex flex-row gap-[18px]">
                                <span className=" font-open_sans font-bold text-[21px]">
                                    {" "}
                                    1,520{" "}
                                </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center">
                                    {" "}
                                    <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]">
                                        +1.7%
                                    </span>{" "}
                                </div>
                            </div>
                        </div>

                        <div className="card  flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">
                            <div className="icon bg-[#ECA4A4] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={LikesIcon} height={18} width={18} />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]">
                                Total Likes
                            </p>

                            <div className="revenue flex flex-row gap-[18px]">
                                <span className=" font-open_sans font-bold text-[21px]">
                                    {" "}
                                    9,721{" "}
                                </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center">
                                    {" "}
                                    <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]">
                                        +1.4%
                                    </span>{" "}
                                </div>
                            </div>
                        </div>

                        <div className="card  flex-1 py-[18px] px-[26px] shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px]">
                            <div className="icon bg-[#A9B0E5] w-[30px] h-[30px] flex justify-center items-center rounded-full mb-[8px]">
                                <Image src={UserIcon} height={18} width={18} />
                            </div>

                            <p className=" font-secondary text-[11px] text-[#000]">
                                Total Users
                            </p>

                            <div className="revenue flex flex-row gap-[18px]">
                                <span className=" font-open_sans font-bold text-[21px]">
                                    {" "}
                                    9,721{" "}
                                </span>

                                <div className="label w-fit rounded-full px-[8px] py-[4px] bg-[#E9F9EB] flex justify-center items-center">
                                    {" "}
                                    <span className=" font-figtree text-[#3CC952] text-[10px] font-[600]">
                                        +4.2%
                                    </span>{" "}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="act-card w-full bg-[#fff] rounded-[10px] py-[30px] px-[40px]">
                        <div className=" overflow-hidden">
                            <div className="header flex flex-row justify-between items-center">
                                <div>
                                    <p className=" font-primary text-[18px] font-bold">
                                        Activities
                                    </p>
                                    <p className=" font-primary text-[14px] font-normal text-[#858585]">
                                        May - June 2021
                                    </p>
                                </div>

                                <div className="legened flex flex-row justify-center items-center">
                                    <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#E9A0A0] rounded-full">
                                        {" "}
                                    </div>
                                    <p className=" font-secondary text-[14px] mr-[35px]">
                                        {" "}
                                        Guest{" "}
                                    </p>

                                    <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#9BDD7C] rounded-full">
                                        {" "}
                                    </div>
                                    <p className=" font-secondary text-[14px] mr-[35px]">
                                        {" "}
                                        User{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="graphs absolute w-[70%] z-10 mt-[30px] flex flex-row items-baseline justify-center gap-[110px] pl-[14px]">
                                <div className="graph1 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">
                                    <div className="flex flex-row gap-[10px] items-baseline">
                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[200px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[80px] w-[38px] "></div>
                                    </div>

                                    <p>Week 1</p>
                                </div>

                                <div className="graph2 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">
                                    <div className="flex flex-row gap-[10px] items-baseline">
                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[152px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[168px] w-[38px] "></div>
                                    </div>

                                    <p>Week 2</p>
                                </div>

                                <div className="graph3 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">
                                    <div className="flex flex-row gap-[10px] items-baseline">
                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[80px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[120px] w-[38px] "></div>
                                    </div>

                                    <p>Week 3</p>
                                </div>

                                <div className="graph4 flex flex-col items-center text-[#858585] font-secondary text-[14px] ">
                                    <div className="flex flex-row gap-[10px] items-baseline">
                                        <div className="bar1 rounded-[4px] bg-[#98D89E] h-[160px] w-[38px] "></div>
                                        <div className="bar2 rounded-[4px] bg-[#EE8484] h-[128px] w-[38px] "></div>
                                    </div>

                                    <p>Week 4</p>
                                </div>
                            </div>

                            <div className="chart flex flex-col  translate-x-[-20px]">
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">
                                    <p className="mr-[15px] tezt-[14px]">500</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />
                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">
                                    <p className="mr-[15px] tezt-[14px]">400</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />
                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">
                                    <p className="mr-[15px] tezt-[14px]">300</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />
                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">
                                    <p className="mr-[15px] tezt-[14px]">200</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />
                                </div>
                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">
                                    <p className="mr-[15px] tezt-[14px]">100</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />
                                </div>

                                <div className="line flex flex-row justify-center items-center text-[#858585] mt-[16px]">
                                    <p className="mr-[15px] tezt-[14px]">0</p>
                                    <hr className="w-[90%] text-[#EAEAEA]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between w-full items-center gap-[40px] ">
                        <div className="product-box flex-1 shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px] py-[30px] px-[40px]">
                            <div className="header flex flex-row justify-between items-center mb-[24px]">
                                <p className="font-primary font-bold text-[18px]">
                                    Top Products
                                </p>
                                <span className="text-[#858585] font-primary text-[12px]">
                                    May - June 2021
                                </span>
                            </div>

                            <div className="flex flex-row gap-[62px]">
                                <Image src={RoundChart} width={100} height={100} />

                                <div className="stats flex justify-center items-start flex-col">
                                    <div className=" flex items-start flex-row justify-start">
                                        <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#98D89E] rounded-full translate-y-1">
                                            {" "}
                                        </div>
                                        <div className="text">
                                            <p className=" font-primary font-bold text-[14px]">
                                                Basic Tees
                                            </p>
                                            <p className=" font-secondary font-normal text-[#858585] text-[12px]">
                                                55%
                                            </p>
                                        </div>
                                    </div>

                                    <div className=" flex items-start flex-row justify-start">
                                        <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#F6DC7D] rounded-full translate-y-1">
                                            {" "}
                                        </div>
                                        <div className="text">
                                            <p className=" font-primary font-bold text-[14px]">
                                                Custom Short Pants
                                            </p>
                                            <p className=" font-secondary font-normal text-[#858585] text-[12px]">
                                                31%
                                            </p>
                                        </div>
                                    </div>

                                    <div className=" flex items-start flex-row justify-start">
                                        <div className="dot w-[10px] h-[10px] mr-[10px] bg-[#EE8484] rounded-full translate-y-1">
                                            {" "}
                                        </div>
                                        <div className="text">
                                            <p className=" font-primary font-bold text-[14px]">
                                                Super Hoodies
                                            </p>
                                            <p className=" font-secondary font-normal text-[#858585] text-[12px]">
                                                14%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="profileContainer" className="product-box flex-1 flex h-[232px] justify-center items-center flex-col  shadow border-solid border-[#e0e0e0] border-2 bg-[#fff] rounded-[20px] py-[30px] px-[40px]">

                            {
                                !data &&
                                <>
                                    <div id="addBtn" className="  bg-[#F2F2F2] w-fit rounded-full" onClick={openModal} >
                                        <Image src={Controls} width={50} height={50} />
                                    </div>

                                    <p className=" font-figtree font-[600] text-[16px] text-[#858585] mt-[16px]">
                                        Add Profile
                                    </p>
                                </>

                            }

                            {

                                data &&

                                <>

                                    <p className=" font-figtree text-[24px] font-bold w-full flex justify-start items-center mb-[58px]" > {profileData.name} </p>

                                    <div className="socials flex justify-between items-center flex-wrap flex-2 w-full ">

                                        <div className="flex-[50%] flex justify-start items-center flex-row" >  <div className="h-[30px] w-[30px] mr-[12px] rounded-full bg-[#E9F9EB] flex justify-center items-center" > <Image src={WhatsApp} width={24} height={24} /> </div> <p className=" underline font-figtree text-[14px]" >{ profileData.phone }</p> </div>

                                        <div className="flex-[50%] flex justify-start items-center flex-row" >  <div className="h-[30px] w-[30px] mr-[12px] rounded-full bg-[#E9F9EB] flex justify-center items-center" > <Image src={Insta} width={24} height={24} /> </div> <p className=" underline font-figtree text-[14px]" >{ profileData.insta }</p> </div>

                                        <div className="flex-[50%] flex justify-start items-center flex-row" >  <div className="h-[30px] w-[30px] mr-[12px] rounded-full bg-[#E9F9EB] flex justify-center items-center" > <Image src={Mail} width={24} height={24} /> </div> <p className=" underline font-figtree text-[14px]" >{ profileData.email }</p> </div>

                                        <div className="flex-[50%] flex justify-start items-center flex-row" >  <div className="h-[30px] w-[30px] mr-[12px] rounded-full bg-[#E9F9EB] flex justify-center items-center" > <Image src={Yt} width={24} height={24} /> </div> <p className=" underline font-figtree text-[14px]" >{ profileData.yt }</p> </div>


                                    </div>

                                </>

                            }

                        </div>
                    </div>
                </main>
            </section>



        </>
    );
}
