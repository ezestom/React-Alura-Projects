import alimentacion from "../assets/images/alimentacion.svg";
import salud from "../assets/images/salud.svg";
import otros from "../assets/images/otros.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icon } from "../UI/index";

export default (type) => {
	const Images = {
		Restaurante: <Icon src={alimentacion} alt="Icono de Restaurante" />,
		Salud: <Icon src={salud} alt="Icono de Salud" />,
		Otros: <Icon src={otros} alt="Icono de Otros" />,
		Transporte: <Icon src={transporte} alt="Icono de Transporte" />,
		Utilidades: <Icon src={utilidades} alt="Icono de Utilidades" />,
		Default: <Icon src={otros} alt="Icono de Default" />,
	};
	return Images[type] || Images["Default"];
};
