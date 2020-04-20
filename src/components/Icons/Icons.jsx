import React from 'react';

const Icons = ({ icon }) => {
	switch (icon){
		case "account":
			return (
				<svg className="icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" space="preserve">
				<g><g>
						<path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,74.667
							c67.635,0,122.667,55.031,122.667,122.667S323.635,320,256,320s-122.667-55.031-122.667-122.667S188.365,74.667,256,74.667z
							M256,469.333c-69.707,0-131.52-33.755-170.473-85.615c42.676-20.534,103.621-42.385,170.473-42.385
							c66.857,0,127.807,21.854,170.474,42.383C387.521,435.577,325.708,469.333,256,469.333z"/>
					</g>
				</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
				</svg>
			)
		case "bell":
			return (
				<svg className="icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" space="preserve"><g><g>
					<path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04
						V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483
						c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419
						H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z"/></g></g>
					<g><g>
					<path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z"/>
					</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
				</svg>
			)
		case "key":
			return (
				<svg className="icon-input" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 512 512">
					<g>
						<g>
							<path d="M463.748,48.251c-64.336-64.336-169.013-64.335-233.349,0.001c-43.945,43.945-59.209,108.706-40.181,167.461
								L4.396,401.536c-2.813,2.813-4.395,6.621-4.395,10.606V497c0,8.291,6.709,15,15,15h84.858c3.984,0,7.793-1.582,10.605-4.395
								l21.211-21.226c3.237-3.237,4.819-7.778,4.292-12.334l-2.637-22.793l31.582-2.974c7.178-0.674,12.847-6.343,13.521-13.521
								l2.974-31.582l22.793,2.651c4.233,0.571,8.496-0.85,11.704-3.691c3.193-2.856,5.024-6.929,5.024-11.206V363h27.422
								c3.984,0,7.793-1.582,10.605-4.395l38.467-37.958c58.74,19.043,122.381,4.929,166.326-39.046
								C528.084,217.266,528.084,112.587,463.748,48.251z M421.313,154.321c-17.549,17.549-46.084,17.549-63.633,0
								s-17.549-46.084,0-63.633s46.084-17.549,63.633,0S438.861,136.772,421.313,154.321z"/>
						</g>
					</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
				</svg>
			)
		case "user":
			return (
				<svg className="icon-input" height="15px" viewBox="0 -32 512 512" width="15px" xmlns="http://www.w3.org/2000/svg">
					<path d="m298.667969 106.667969c0 58.910156-47.757813 106.664062-106.667969 106.664062s-106.667969-47.753906-106.667969-106.664062c0-58.910157 47.757813-106.667969 106.667969-106.667969s106.667969 47.757812 106.667969 106.667969zm0 0"/>
					<path d="m282.667969 256h-181.335938c-55.871093 0-101.332031 45.460938-101.332031 101.332031v74.667969c0 8.832031 7.167969 16 16 16h352c8.832031 0 16-7.167969 16-16v-74.667969c0-55.871093-45.460938-101.332031-101.332031-101.332031zm0 0"/>
					<path d="m506.902344 180.265625-74.667969-69.332031c-3.007813-2.796875-6.933594-4.246094-10.878906-4.246094-10.582031 0-16.023438 9.003906-16.023438 15.980469v48h-85.332031c-11.796875 0-21.332031 9.554687-21.332031 21.332031s9.535156 21.332031 21.332031 21.332031h85.332031v48c0 8.875 7.210938 16 16 16 3.96875 0 7.875-1.46875 10.902344-4.265625l74.667969-69.332031c3.242187-3.03125 5.097656-7.296875 5.097656-11.734375s-1.855469-8.703125-5.097656-11.734375zm0 0"/>
				</svg>
			)
		case "search":
			return (
					<svg className="icon" id="Capa_1" enable-background="new 0 0 515.558 515.558" viewBox="0 0 515.558 515.558" xmlns="http://www.w3.org/2000/svg">
						<path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
					</svg>
					)
		default:
			return <div />;
	}
}

export default Icons;
