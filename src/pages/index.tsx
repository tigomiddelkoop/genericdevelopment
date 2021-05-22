import Head from 'next/head'

export default function Home() {

    return (
        <div>
            <Head>
                <title>GenericDevelopment</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div
                className={"h-screen w-full text-white flex flex-col bg-gray-800 items-center justify-center text-center"}>
                <div className={"m-2"}>
                    <div className={"jetbrains font-light 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-3xl"}>We are</div>
                    <div className={"jetbrains font-light 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-3xl mb-2"}>GenericDevelopment</div>
                    <div className={"jetbrains font-light md:text-1xl text-xs mb-8"}>An opensource development company which strives to build and improve tech</div>
                </div>
                {/*<div className={"flex flex-col"}>*/}
                {/*    <p className={"mb-2"}>In the meantime if you are intrested my portfolio while I am building this site</p>*/}
                {/*    <div>*/}
                {/*        <a href="https://tigo.tech"*/}
                {/*           className={"jetbrains font-light text-xl border hover:bg-gray-500 rounded-lg py-1 px-2"}>tigo.tech</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
