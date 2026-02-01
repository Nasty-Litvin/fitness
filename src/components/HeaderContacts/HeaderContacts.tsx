import IconText from "../IconText/IconText";
import Icon from "../Icon/Icon";
import telUrl from "/Icons/tel.svg";
import socialIcons from "../../data/social.json";
import "./style.scss";



const HeaderContacts = () => {
    const tel = "+7 (495) 859-03-72";

    return (
        <div className="header-contacts">
            <IconText
                iconUrl={telUrl}
                text={tel}
                iconStyle={{width: "16px"}}
            />
            <div>
                {socialIcons.data.map((icon) => (
                    <Icon
                        urlIcon={icon.url}
                        style={{width: icon.width}}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeaderContacts;