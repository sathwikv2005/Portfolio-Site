import { MdContacts } from 'react-icons/md'
import { IoMail } from 'react-icons/io5'
import { LuGithub } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Contact() {
	return (
		<div className="contact--wrapper">
			<div className="contact--heading">
				<MdContacts /> Contact
			</div>
			<div className="contact--body">
				<div className="contact--item hover">
					<a href="mailto:sathwikv2005@gmail.com">
						<IoMail className="contact--icon" />
						sathwikv2005@gmail.com
					</a>
				</div>
				<div className="contact--item hover">
					<a href="https://www.linkedin.com/in/sathwikv2005/">
						<FaLinkedinIn className="contact--icon" />
						Linked In
					</a>
				</div>
				<div className="contact--item hover">
					<a href="https://github.com/sathwikv2005">
						<LuGithub className="contact--icon" />
						GitHub
					</a>
				</div>
			</div>
		</div>
	)
}
