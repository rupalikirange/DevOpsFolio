import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MapPin, c as GraduationCap, d as Cloud, f as Briefcase, i as Phone, l as GitBranch, m as ArrowUpRight, n as Sparkles, o as Mail, p as Award, r as Shield, s as Linkedin, t as Terminal, u as Container } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CGRpMDNG.js
var import_jsx_runtime = require_jsx_runtime();
var skills = [
	{
		icon: Sparkles,
		label: "Claude Code Agents · GenAI for DevOps"
	},
	{
		icon: Cloud,
		label: "AWS (EC2, S3, EKS, IAM, Lambda)"
	},
	{
		icon: Container,
		label: "Kubernetes · Docker · Helm"
	},
	{
		icon: Terminal,
		label: "Terraform · Ansible · Shell"
	},
	{
		icon: GitBranch,
		label: "Jenkins · GitHub Actions · Codefresh"
	},
	{
		icon: Shield,
		label: "MTLS · Security & Governance"
	}
];
var experience = [
	{
		role: "Technology Lead — Cloud Professional",
		company: "Infosys Limited",
		project: "VISA — Applications Migration to AWS",
		period: "Oct 2025 — Present",
		points: [
			"Two-phase cloud modernization: microservices to AWS via GitHub Actions CI/CD, cutting deployment time by 30%.",
			"Containerized apps with Docker, deployed on Amazon EKS using Helm charts for high availability.",
			"Built Claude Code GenAI Agents for CI/CD workflow generation and deployment triggers — reduced human effort by 80%.",
			"Used agentic AI to auto-generate Terraform modules, Helm values and runbooks, accelerating delivery by 60%.",
			"Stack: AWS, GitHub Actions, Docker, Helm, Kubernetes, Terraform, CloudWatch, SonarQube, Checkmarx, Ansible, Claude Code."
		]
	},
	{
		role: "AWS Migration Engineer",
		company: "Infosys Limited",
		project: "ANZ — Services Migration to AWS",
		period: "Apr 2025 — Sept 2025",
		points: [
			"Lift-and-Shift migration from third-party cloud to AWS; authored Terraform for infra provisioning.",
			"Automated CI/CD with Docker + Codefresh, reducing manual effort by 85%; added approval gates for safer deploys.",
			"Designed Helm charts and managed EKS across 6 environments; resolved 90% of Helm/EKS issues.",
			"Leveraged Claude Code for automated code reviews, incident runbooks and infra drift detection.",
			"Led architecture finalization and POC — 100% environment readiness for production."
		]
	},
	{
		role: "AWS DevOps Engineer — API Migration",
		company: "Infosys Limited",
		project: "Danske Bank — API Migration to AWS",
		period: "Feb 2024 — Feb 2025",
		points: [
			"Delivered API migration across Test, SysT and Prod using Terraform.",
			"End-to-end CI/CD automation from commit to prod — reduced manual intervention by 90%.",
			"Integrated on-prem apps with AWS services; improved deployment reliability, cut downtime by 30%."
		]
	},
	{
		role: "Migration Lead — JIRA Cloud Transition",
		company: "Tata Consultancy Services",
		project: "Avis Budget Group — JIRA to Atlassian Cloud",
		period: "Aug 2021 — Nov 2024",
		points: [
			"Led JIRA migration from on-prem to Atlassian SaaS for 100+ users using JIRA Migration Assistant.",
			"Executed across Sandbox, Pre-prod and Prod with zero critical downtime.",
			"Used Jenkins, S3 and AWS Lambda for automation; improved operational efficiency by 25%."
		]
	},
	{
		role: "Support Engineer — Administration & Development",
		company: "Tata Consultancy Services",
		project: "Avis Budget Group — Atlassian Suite",
		period: "Aug 2017 — Aug 2021",
		points: [
			"Administered JIRA, Confluence, Bamboo, Crowd, Fisheye for 100+ users at 99.9% uptime.",
			"Automated MySQL jobs; managed license compliance and monthly upgrades.",
			"95% issue resolution within 24h; 98% on-time ticket delivery."
		]
	}
];
var certifications = [
	"AWS Cloud Practitioner",
	"AWS Certified Solutions Architect — Associate",
	"Anthropic Claude Code 101",
	"Infosys Certified Associate — IaC with Terraform",
	"Terraform — KodeKloud"
];
var awards = [
	"AWS Infra Setup Excellence — Danske MHI squad",
	"Client Recognition — high-quality delivery under tight timelines",
	"On-the-Spot Team Best Performer (consecutive months)",
	"Inspiring Leader Award",
	"Appreciation for Quick Learning & Ownership"
];
var endorsements = [
	{
		quote: "Rupali has strong cloud architecture skills, quickly troubleshoots complex issues, and fosters a collaborative team environment.",
		author: "DevOps Engineer, Infosys"
	},
	{
		quote: "Excellent AWS and DevOps expertise, adapts swiftly to new technologies, and is a valuable team asset.",
		author: "Senior System Engineer, Infosys"
	},
	{
		quote: "Rupali played a key role in smooth cloud migrations with AWS, Docker, and Kubernetes.",
		author: "Cloud Operations Engineer, Infosys"
	}
];
function ResumePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 font-mono text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "~/rupali"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "$"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-8 text-sm md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#experience",
									className: "text-muted-foreground transition hover:text-foreground",
									children: "Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#ai",
									className: "text-muted-foreground transition hover:text-foreground",
									children: "AI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#skills",
									className: "text-muted-foreground transition hover:text-foreground",
									children: "Skills"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contributions",
									className: "text-muted-foreground transition hover:text-foreground",
									children: "Impact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "text-muted-foreground transition hover:text-foreground",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:rupalikirangedevops@gmail.com",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), " Hire me"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				id: "top",
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 md:grid-cols-[1.4fr,1fr] md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })]
								}), "Available for cloud & DevOps roles"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl",
								children: ["Rupali ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "Kirange"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 max-w-xl text-lg text-muted-foreground md:text-xl",
								children: [
									"Cloud Technology Lead with",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "8 years"
									}),
									" shipping AWS migrations, Kubernetes platforms, and CI/CD automation — now driving AI-powered DevOps with Claude Code Agents at Infosys & TCS."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:rupalikirangedevops@gmail.com",
									className: "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "rupalikirangedevops@gmail.com"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.linkedin.com/",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" }),
										" LinkedIn",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " Pune, Maharashtra, India"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +91 93566 75807"]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glow rounded-xl border border-border bg-[var(--color-terminal)] p-1 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b border-border/60 px-4 py-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-destructive/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-chart-4/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-accent/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 font-mono text-xs text-muted-foreground",
										children: "rupali@aws — zsh"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-[var(--color-terminal-foreground)]",
								children: `$ whoami
> Cloud Technology Lead @ Infosys Limited

$ cat stack.yaml
ai:               [claude-code, agentic-ai, genai-devops]
cloud:            [aws, eks, lambda, s3, ecs, fargate, codedeploy]
iac:              [terraform, helm, ansible]
ci_cd:            [github-actions, jenkins, codefresh]
monitoring:       [grafana, prometheus, splunk]
scripting:        [bash, shell]
containerization: [docker, kubernetes]


$ kubectl get impact
NAME               VALUE
deployment-time    -30%
manual-effort      -90%
ci-cd-automation   +85%
ai-agents          80% effort saved
`
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "skills",
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "02",
						title: "Toolbox"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: skills.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:bg-card/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-primary/10 p-2.5 text-primary transition group-hover:bg-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: label
							})]
						}, label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experience",
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "03",
						title: "Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-6",
						children: experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 md:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold md:text-xl",
										children: job.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-primary",
										children: job.company
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm text-muted-foreground",
										children: job.project
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground",
									children: job.period
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground",
								children: job.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
								}, p))
							})]
						}, job.project))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "ai",
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "04",
						title: "AI in Action"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								title: "Claude Code Agents",
								desc: "Built agentic workflows that generate CI/CD pipelines, Helm charts and Terraform modules from natural-language prompts."
							},
							{
								title: "AIDLC Modernization",
								desc: "Integrated Claude Code across the AI-driven development lifecycle — code review, runbooks and incident response."
							},
							{
								title: "80% Effort Reduction",
								desc: "Automated deployment triggers and infra generation with GenAI, freeing engineers for architecture and reliability work."
							},
							{
								title: "Self-Healing Runbooks",
								desc: "Generated on-call runbooks and remediation steps with LLMs, cutting mean-time-to-recover for common EKS/Helm issues."
							},
							{
								title: "Drift & Compliance Checks",
								desc: "Used AI-assisted scanning to detect Terraform drift, security misconfigurations and compliance gaps before prod."
							},
							{
								title: "GenAI Upskilling",
								desc: "Certified in Anthropic Claude Code 101; actively evangelizing agentic AI practices within delivery squads."
							}
						].map(({ title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "flex items-center gap-2 text-sm font-semibold text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-accent" }),
									" ",
									title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: desc
							})]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contributions",
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "05",
						title: "Key Contributions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: [
							"Agentic AI modernization using Claude Code in the CI/CD AIDLC lifecycle.",
							"Manual approval gates in CI/CD for Terraform apply/destroy to prevent accidental infra changes.",
							"Reusable Terraform architecture for multi-environment deployments.",
							"Backup strategy for S3 and DynamoDB aligned with ANZ standards.",
							"MTLS (Mutual TLS) for secure server-to-server communication in non-prod environments.",
							"Bank cloud infrastructure setup per security standards and governance."
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-primary",
									children: "→"
								}),
								" ",
								item
							]
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "06",
						title: "Certifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 flex-none text-primary" }), c]
						}, c))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "07",
						title: "Awards"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: awards.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mt-0.5 h-4 w-4 flex-none text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
						}, a))
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "08",
						title: "Endorsements"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-3",
						children: endorsements.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex flex-col rounded-xl border border-border bg-card p-6 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"“",
									e.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-4 font-mono text-xs text-primary",
								children: ["— ", e.author]
							})]
						}, e.author))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "09",
						title: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 rounded-xl border border-border bg-card p-6 md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-primary/10 p-3 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "B.E. — Computer Engineering"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "JSPM's Rajarshi Shahu College of Engineering, Pune · Savitribai Phule Pune University · 2014 – 2018 · 80.5%"
							})] })]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-6 py-24 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "10",
							title: "Let's build something reliable",
							center: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-muted-foreground",
							children: "Available for Cloud Lead, DevOps Architect, Platform Engineering and AI-driven automation roles. Reach out for opportunities or collaboration."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:rupalikirangedevops@gmail.com",
								className: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " rupalikirangedevops@gmail.com"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919356675807",
								className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 93566 75807"]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Rupali Kirange"
						]
					})
				})
			})
		]
	});
}
function SectionHeading({ eyebrow, title, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "text-center" : "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-xs text-primary",
			children: [eyebrow, " //"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl font-bold tracking-tight md:text-4xl",
			children: title
		})]
	});
}
//#endregion
export { ResumePage as component };
