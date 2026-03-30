import {FC, ReactElement} from "react"
import './SvgIcons.scss'

import Icon1 from '../../assets/svg/slot_1_empty.svg?react'
import Icon2 from '../../assets/svg/slot_2_empty.svg?react'
import Icon3 from '../../assets/svg/slot_3_empty.svg?react'
import Icon4 from '../../assets/svg/slot_4_empty.svg?react'
import Icon5 from '../../assets/svg/slot_5_empty.svg?react'
import Icon6 from '../../assets/svg/slot_6_empty.svg?react'
import Icon7 from '../../assets/svg/slot_7_empty.svg?react'
import Icon8 from '../../assets/svg/slot_8_empty.svg?react'
import Icon9 from '../../assets/svg/slot_9_empty.svg?react'
import Icon10 from '../../assets/svg/slot_10_empty.svg?react'
import Icon11 from '../../assets/svg/slot_11_empty.svg?react'
import Icon12 from '../../assets/svg/slot_12_empty.svg?react'

const SvgIcons: FC = (): ReactElement => {
    return (
        <section id="svgs">
            <div className="wrapper">
                <Icon1 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon2 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon3 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon4 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon5 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon6 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon7 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon8 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon9 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon10 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon11 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
                <Icon12 color="#4f7aa9" style={{ width: "15rem", height: "auto" }} />
            </div>
        </section>
    );
};

export default SvgIcons;