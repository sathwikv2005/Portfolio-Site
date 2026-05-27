import { smoothScroll } from '../home/NavBar'
import { terminalAsci } from './useTerminalBoot'

export function runCommand({ raw, currentDir, setCurrentDir, setOutputColor, setHistory }) {
	const args = raw.toLowerCase().trim().split(' ')
	const cmd = args[0]

	switch (cmd) {
		case 'clear':
			setHistory([])
			return null

		case 'help':
			return `available commands:

navigation:
  ls                     list files
  pwd                    print working directory
  cd <dir>               navigate to section
  open <target>          open section/link

portfolio:
  projects               open projects
  skills                 open skills
  contact                open contact
  resume                 open resume
  github                 open github
  linkedin               open linkedin
  email                  show email

utility:
  clear                  clear terminal
  color <value>          change output color
  echo <text>            print text
  whoami                 display user
  about                  about me
  ascii                  prints asci art
  systeminfo             display system information
  neofetch               display system information

examples:
  cd projects
  open github
  color cyan
  color reset
  echo hello world`

		case 'ls':
			if (currentDir === '~') {
				return 'projects skills contact github linkedin resume.pdf'
			}

			if (currentDir === '~/projects') {
				return 'better-vtop helium-lang portfolio'
			}

			return 'directory empty'

		case 'pwd':
			return currentDir

		case 'open':
		case 'cd': {
			const dir = args[1]

			if (!dir) {
				return `usage: ${cmd} <target>

available targets:
  projects
  skills
  contact
  resume
  github
  linkedin`
			}

			if (dir === '~') {
				setCurrentDir('~')

				return null
			}

			if (dir === 'projects') {
				return navigateToProjects()
			}

			if (dir === 'skills') {
				return navigateToSkills()
			}
			if (dir === 'contact') {
				return navigateToContact()
			}
			if (dir === 'github') {
				return navigateToGitHub()
			}
			if (dir === 'linkedin') {
				return navigateToLinkedIn()
			}

			if (dir === 'resume' || dir === 'resume.pdf') {
				return navigateToResume()
			}

			return `cd: no such directory: ${dir}
available targets:
  projects
  skills
  contact
  resume
  github
  linkedin`
		}

		case 'whoami':
			return 'sathwik'

		case 'echo':
			if (args.length < 2) {
				return 'usage: echo <text>'
			}
			return args.slice(1).join(' ')

		case 'color': {
			var color = args[1]

			if (!color) {
				return 'usage: color <css-color | reset>'
			}

			if (color == 'reset') color = '#00ff88'

			setOutputColor(color)

			return `output color changed to ${color}`
		}

		case 'about':
			return 'software developer building cool things...'

		case 'project':
		case 'projects':
			return navigateToProjects()

		case 'skill':
		case 'skills':
			return navigateToSkills()

		case 'resume':
			return navigateToResume()

		case 'contact':
			return navigateToContact()

		case 'email':
			return 'sathwikv2005@gmail.com'

		case 'linkedin':
			return navigateToLinkedIn()

		case 'github':
			return navigateToGitHub()

		case 'asci':
		case 'ascii':
			return terminalAsci

		case 'systeminfo':
		case 'neofetch':
			return (
				terminalAsci +
				`
--------------------------------------------------------

OS:         portfolioOS 1.0
Shell:      reactsh
Terminal:   sathwik-terminal
Developer:  Sathwik
Location:   India
Role:       Software Developer

Interests:
  Full-Stack Development
  Compilers
  Systems Programming
  Open Source
  Game Development

Editor:     VS code
Theme:      Dark
Status:     Building cool things...
`
			)

		default:
			return `command not found: ${cmd}

type "help" to list available commands`
	}
}

function navigateToProjects() {
	smoothScroll('#projects')
	return 'navigating to projects...'
}

function navigateToSkills() {
	smoothScroll('#root')
	return 'navigating to skills...'
}
function navigateToContact() {
	smoothScroll('#contact')
	return 'navigating to contact...'
}

function navigateToResume() {
	window.open('/resume', '_blank')
	return 'opening resume...'
}
function navigateToLinkedIn() {
	window.open('https://linkedin.com/in/sathwikv2005/', '_blank')
	return 'opening LinkedIn...'
}
function navigateToGitHub() {
	window.open('https://github.com/sathwikv2005', '_blank')
	return 'opening GitHub...'
}
