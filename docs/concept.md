---
title: "Initial Concept"
author:
    - "Nam Anh Nguyen"
    - "Kirill Bulanov"
date: "Sommersemester 2024"
---	

# Initial Concept

Wir haben eine App bestehend aus:
- Angular Frontend
- Java Backend
- Postgres Datenbank

Frontend und Backend befinden sich aktuell in verschiedenen GitHub Repositories.

### Verteilte Umgebungen
Das Frontend und Backend sollen jeweils über eine URL erreichbar sein und remote in der Cloud laufen. Dementsprechend soll es drei verschiedene Umgebungen geben: `develop`, `staging` und `production`.

<strong>Develop</strong> soll als Testumgebung dienen, um features und bugfixes zu testen, die ggf. zurück gerollt werden können.
<strong>Staging</strong> dient als 'Generalprobe' bevor die App auf die production Umgebung verteilt werden darf, um nochmal in einer neuen Umgebung zu gewährleisten, dass die neuen features oder bugfixes funktionieren.
<strong>Production</strong> ist die Live Umgebung, die die App für den Endverbraucher zugänglich macht und reale Daten enthält bzw. damit agiert.

### Stack

- GitHub (+ Actions)
- Kaniko für image build
- Infra Repository mit Kubernetes & Cloud VM
    - K8 übernimmt TLS & DNS
    - develop, staging, production namespace

<strong>TBD</strong>
- Monitoring (Grafana, Sentry oder Prometheus)
- CodeSniffer/Quality Gate (Sonar)

### Software Lifecycle

#### Branches
Neben dem auschließlichen `main` Branch soll es folgende Branches geben, die CI/CD auslösen:
- `feature/*` und `fix/*`
- `release/*`
- `tag/*`

Alle anderen Branch Namen sollen keine CI/CD auslösen.

#### CI/CD

Für das Frontend und Backend Repository wollen wir jeweils CI/CD mit GitHub Actions einführen, die den Software Lifecycle steuern und abbilden sollen. Es soll mehrere stages geben:
- `test`: ausführen von unit tests, ggf. linter
- `build`: app bundle bauen
- `push`: build und push des docker images in die registry
- `deploy`: verteilt App auf die entsprechende Umgebung, abh. vom Branch Namen
    - `feature/*` & `fix/*` -> `develop`
    - `release/*` -> `staging`
    - `tag/*` -> `production`

Wenn `feature`, `fix` und `release` Branches ausgecheckt und gepushed werden, sollen die immer `test`, `build` und `push` stage ausgeführt werden.

Das Ausführen der push stage soll immer gewährleisten, dass das aktuellste Image da ist, um ggf. sofort manuell zu deployen.

Der `deploy` auf die entsprechende Umgebung abh. vom Branch Namen soll immer `manuell` sein - mit der Ausnahme bei einem push auf den main branch, wie z.B. nach einem Merge auf main. Hier soll immer ein automatischer Deploy auf die develop Umgebung stattfinden, damit - egal was gemerged wird - die develop Umgebung immer aktuell ist.

#### Cloud VM & Kubernetes

Es soll ein Infratructure Repository geben, welches eine Cloud VM eines Cloud Providers alloziert (AWS oder GCP). Diese VM soll als Deployment Umgebung dienen, auf der die entsprechenden Kubernetes Cluster laufen sollen.
Es gibt develop, staging, production namespaces, die die K8 ressourcen enthalten, um die cluster zu definieren. Jeder namespace bzw. cluster soll mehrere replicas eines pods laufen lassen (develop - 1, staging - 3, production - 3). Es soll services wie load-balancer geben und TLS sowie FQDN in den entsprechenden ressourcen konfiguriert sein.

Da der App Lifecycle getrennt vom Infrastructure Lifecycle ist, werden die app images aus der docker registry für die K8 ressourcen heruntergeladen werden.


### Offene Fragen

* Eine VM für jede deployment Umgebung? Soll eine VM eine verteilte Umgebung darstellen?
* Wie werden die Tools wie Prometheus, Grafana und Sonar angebunden?
* What about the persistence layer (database)?


* Muss deployment von Front- und Backend irgendwie choreografiert werden?
Es gibt keine Abhängigkeit zueinander. Frontend und Backend können getrennt voneinander oder parallel deployed werden

* Da Front- und Backend separat sind, wie soll der
CORS-Sachverhalt gelöst werden?
CORS sollte leicht zu konfigurieren sein im Backend

* Wo soll das monitoring laufen und wie kommt es dort hin?
Wird vermutlich separat deployed als K8 ressource

* Wo soll der Codesniffer laufen und wie kommt er dort hin?
Soll für FE & BE in der Pipeline laufen, muss entweder in den App Repos konfiguriert werden oder als K8 ressource konfiguriert werden

* Wie kommt traffic zum Front- und Backend?

* Welche GCP services wollt ihr nutzen? wie waeren diese zu provisionieren?