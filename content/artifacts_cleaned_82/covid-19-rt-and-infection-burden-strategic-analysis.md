---
id: 10
title: "COVID-19 Rt and Infection Burden Strategic Analysis"
category: "Public Health Analytics and Data Visualization"
portfolio_role: "Flagship case study"
original_file: "COVID Analysis.md"
clean_filename: "covid-19-rt-and-infection-burden-strategic-analysis.md"
tags:
  - "Rt"
  - "test positivity adjustment"
  - "O-zone plots"
  - "reopening risk"
  - "state comparisons"
source_length_chars: 4515
confidentiality_review: "Internal evidence artifact"
publication_status: "Portfolio evidence artifact"
---
# COVID-19 Rt and Infection Burden Strategic Analysis

**Portfolio category:** Public Health Analytics and Data Visualization

**Portfolio role:** Flagship case study

**Tags:** Rt, test positivity adjustment, O-zone plots, reopening risk, state comparisons

**Source evidence excerpt:** When I started looking at how COVID-19 was spreading across states, one problem kept nagging at me. Confirmed cases never told the full story. For every confirmed case, there were clearly infections we weren't catching. The question became: how do you compare one state to another in a way that's actually fair? | What I ended up doing was estimating total infections using confirmed cases and test positivity. Once I had a better approximation of true infections, I normalized by population. That ga

## Original Source Content

When I started looking at how COVID-19 was spreading across states, one problem kept nagging at me. Confirmed cases never told the full story. For every confirmed case, there were clearly infections we weren't catching. The question became: how do you compare one state to another in a way that's actually fair?

What I ended up doing was estimating total infections using confirmed cases and test positivity. Once I had a better approximation of true infections, I normalized by population. That gave me a cleaner basis for comparison.

Starting in April, I began plotting Rt — the transmission rate — against the percentage of the population infected. I used a rolling 10-day window for infections, because beyond about nine days after symptom onset, people typically aren't carrying replication-competent virus anymore. More realistic snapshot of active transmission.

Over time I kept refining the plots. I added a red zone for when a state was on track to overwhelm hospital capacity within a couple weeks. On the other end, I introduced a "safe zone" I started calling the O-zone. That was deliberate. If everything feels like a methods section, people stop reading.

The O-zone plots turned out to be genuinely useful. At a glance, you could see both current burden and trajectory for any state. Maine and Vermont consistently looked very different from Georgia or Florida. What hit me was how fast things could move. Georgia was once trending toward control, Rt below 1. Within weeks, infections had grown tenfold.

That pattern keeps reinforcing the same lesson about strategy. What worked — especially in parts of Europe — was disciplined iteration. Bring Rt below 1 first. Get to a low baseline. Then reopen carefully, with real mitigation and surveillance. Watch closely. Hold if things hold; adjust if they don't.

Where Georgia went wrong was ignoring those signals. Reopening with Rt already above 1, no adequate mitigation, no real surveillance. The result wasn't a surprise.

Control is always recoverable. Reduce high-risk activity, bring Rt below 1, and you can regain stability. But reopening has to be guided by the data, not by a desire to be done.

Another question that kept coming up: how many infections are we actually missing? Early on, test positivity was a useful proxy for under-detection. More recently, comparing deaths per capita versus cases per capita suggests that high positivity no longer automatically means we're missing more infections — cases per capita has become the more reliable indicator. If the infection fatality rate is around 0.5% and deaths per case are running around 2%, we're probably identifying roughly one in four infections. The missed cases skew younger, but they still drive transmission.

Rt is central to all of this. If Rt is 2, infections double roughly every five days. Below 1, the outbreak contracts. The hard part is that the math is exponential in both directions. A month of unchecked spread can amplify infections more than sixtyfold. Walking it back at Rt 0.8 takes about three times as long. That asymmetry is something most people don't feel in their gut until they see it in the data.

For practical decisions — reopening schools, resuming activities — I always come back to three variables: the transmission risk of the activity itself, the level of community spread, and the mitigation in place. At 1% community infection, the probability that at least one person in a group of 20 is infectious is close to 20%. One in five classrooms. Get that number down to 0.1% and layered mitigation can actually hold things stable. That's why school reopening is so sensitive to community conditions. It's not what happens inside the building — it's the probability infection walks in the door.

On severity: estimates of infection fatality risk have converged around 0.5%, though sharply age-dependent. What matters isn't just the fatality rate in isolation. It's that COVID-19 is both more contagious and more deadly than seasonal flu, and that combination multiplies the total burden in ways that a single number doesn't capture.

I've also tracked genomic data through Nextstrain. Being able to follow how the virus mutates and moves geographically — watching variants emerge, compete, spread — adds depth that case counts alone can't give. It's not a replacement for the epidemiological work. It's another layer of the same story.

There's no shortcut. The only thing that reliably controls transmission is active suppression of transmission.