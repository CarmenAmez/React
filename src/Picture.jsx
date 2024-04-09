
import data from './assets/imagen'

const Picture = () => {

    return (
        <div>
            {
                data.map((d) => (
                    <>
                        <h1>{d.title}</h1>
                        <img src={d.img} alt="" />
                    </>
                ))

            }
        </div>
    );
};

export default Picture;