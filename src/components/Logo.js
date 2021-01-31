import Image from 'src/components/common/Image';
import logo from 'src/images/ortex-logo.png'

const Logo = () => {
    return (
        <Image
            src={logo}
            alt="Ortex Logo"
        />
    );
}

export default Logo;