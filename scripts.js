import api from './api'

function App(){
    const repository = []
    const formEl = document.getElementById('repo-form')
    const inputEl = document.querySelector('input[name=repository]')
    const listEl = document.getElementById('repo-list')

    registerHandlers()

    function registerHandlers(){
        formEl.onsubmit = event => addRepository(event)
    }

    async function addRepository(event){
        event.preventDefault()

        const repoInput = inputEl.value

        if(repoInput.length === 0)
        return

        const response = await api.get(`/repos/${repoInput}`)

        console.log(response)

        repository.push({
            name: 'Rockeseat',
            description: 'Tire a sua ideia do papel e dê á vida a sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rockeseat/rockeseat.com.br',
        })
        render()
    }

    function render(){
        listEl.innerHTML = ''

        repository.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))
            
            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            listEl.appendChild(listItemEl)
        })
    }
}

App()