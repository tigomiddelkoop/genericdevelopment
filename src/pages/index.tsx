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
                <div className={""}>
                    <div className={"jetbrains font-light lg:text-9xl text-4xl"}>We are</div>
                    <div className={"jetbrains font-light lg:text-9xl text-4xl mb-2"}>GenericDevelopment</div>
                    <div className={"jetbrains font-light text-1xl mb-8"}>An opensource development company which strives to build and improve tech</div>
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
