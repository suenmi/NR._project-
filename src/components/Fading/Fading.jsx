import css from "./Fading.module.css"

const Fading = ({isActive, setIsActive}) =>

    {
        return (
            <div className={isActive ? css.fading_active : css.fading}>

            </div>
        )
    }
export default Fading