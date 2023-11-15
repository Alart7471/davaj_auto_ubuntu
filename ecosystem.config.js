module.exports = {
	apps : [
	  {
		name: "auto-dev",
		script: "npm",
		args: "run dev"
	  },
	  {
		name: "auto-prod",
		script: "npm",
		args: "run start"
	  }
	]
  }
