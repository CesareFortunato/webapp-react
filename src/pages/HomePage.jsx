import CardMovie from "../components/CardMovie"

const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Boolbuster</h1>
            <h2><i>The boolean nerd movie community</i></h2>

            <div>
                <div className="row row-cols-3 mt-4">
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                </div>
            </div>
        </>
    )
}

export default HomePage 