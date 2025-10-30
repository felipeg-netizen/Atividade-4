"use strict";

document.addEventListener("DOMContentLoaded", () => {

    function initMobileMenu() {
        const menuToggle = document.getElementById("menu-toggle");
        const mainNav = document.querySelector(".main-nav");

        if (menuToggle && mainNav) {
            menuToggle.addEventListener("click", (e) => {
                e.stopPropagation(); 
                const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
                menuToggle.setAttribute("aria-expanded", !isExpanded);
                mainNav.classList.toggle("is-open");
            });
            
            mainNav.addEventListener("click", (e) => {
                if (e.target.tagName === 'A') {
                        menuToggle.setAttribute("aria-expanded", "false");
                        mainNav.classList.remove("is-open");
                }
            });
        }
    }

    function initThemeToggle() {
        const themeToggle = document.getElementById("theme-toggle");
        const currentTheme = localStorage.getItem("theme");
        
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (currentTheme === "dark" || (!currentTheme && prefersDark)) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }

        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
                
                let theme = "light";
                if (document.body.classList.contains("dark-mode")) {
                    theme = "dark";
                }
                localStorage.setItem("theme", theme);
            });
        }
    }

    function closeAllDropdowns(exceptThisOne) {
        document.querySelectorAll(".dropdown-menu.is-open").forEach(menu => {
            if (menu !== exceptThisOne) {
                menu.classList.remove("is-open");
                menu.previousElementSibling.setAttribute("aria-expanded", "false");
            }
        });
    }

    function initDropdownNav() {
        document.querySelectorAll(".dropdown > a").forEach(dropdownToggle => {
            const dropdownMenu = dropdownToggle.nextElementSibling;
            
            if (!dropdownMenu) return; 

            dropdownToggle.setAttribute("aria-haspopup", "true");
            dropdownToggle.setAttribute("aria-expanded", "false");
            
            dropdownToggle.addEventListener("click", (e) => {
                e.preventDefault(); 
                e.stopPropagation(); 
                const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";
                
                closeAllDropdowns(dropdownMenu);

                dropdownToggle.setAttribute("aria-expanded", !isOpen);
                dropdownMenu.classList.toggle("is-open");
            });

            dropdownToggle.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";
                    dropdownToggle.setAttribute("aria-expanded", !isOpen);
                    dropdownMenu.classList.toggle("is-open");
                    
                    if (!isOpen) {
                        dropdownMenu.querySelector('a').focus();
                    }
                }
            });
        });

    }

    const templates = {
        home: `
            <main class="home">
                <section class="hero-banner-index">
                    <div class="container grid-container align-items-center">
                        <div class="hero-banner-text col-12 col-md-6">
                            <h2>Adote, Ame, Transforme.</h2>
                            <p>Bem-vindo à Vira-Amor! Somos uma ONG dedicada a resgatar, cuidar e encontrar lares amorosos para animais em situação de vulnerabilidade.</p>
                            <a href="#/projetos" class="btn btn-primary btn-lg">Como Ajudar</a>
                        </div>
                        <div class="hero-banner-image col-12 col-md-6">
                            <picture>
                                <source srcset="imagens/cachorro-gato-abraco.webp" type="image/webp">
                                <source srcset="imagens/cachorro-gato-abraco.jpg" type="image/jpeg">
                                <img src="imagens/cachorro-gato-abraco.jpg" alt="Um cachorro e um gato abraçados em um gramado." class="img-fluid rounded">
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="featured-image-section container">
                    <h2 class="section-title">Nossa Missão é Salvar Vidas</h2>
                    <p class="section-subtitle">
                        Cada animal resgatado recebe cuidados veterinários completos, alimentação de qualidade e, o mais importante, muito carinho enquanto aguarda por uma nova família.
                    </p>
                    <picture>
                        <source srcset="imagens/gatos-e-cachorros.webp" type="image/webp">
                        <source srcset="imagens/gatos-e-cachorros.jpg" type="image/jpeg">
                        <img src="imagens/gatos-e-cachorros.jpg" alt="Um gato e um cachorro olhando para a câmera." class="img-fluid rounded shadow-lg">
                    </picture>
                </section>
                <section class="cta-section">
                    <div class="container grid-container align-items-center">
                        <div class="cta-image col-12 col-md-5">
                            <picture>
                                <source srcset="imagens/gato-e-cachorro.webp" type="image/webp">
                                <source srcset="imagens/gato-e-cachorro.jpg" type="image/jpeg">
                                <img src="imagens/gato-e-cachorro.jpg" alt="cachorro e um gato." class="img-fluid rounded">
                            </picture>
                        </div>
                        <div class="cta-text col-12 col-md-7">
                            <h3>Seja um Voluntário</h3>
                            <p>O voluntariado é uma das formas mais gratificantes de transformar a vida de um animal. Doando seu tempo e carinho, você contribui diretamente para o bem-estar dos nossos resgatados.</p>
                            <a href="#/cadastro" class="btn btn-primary">Quero ser voluntário</a>
                        </div>
                    </div>
                </section>
            </main>
        `,
        projetos: `
            <main class="container">
                <section id="voluntariado" class="page-section">
                    <h2 class="section-title">Nossos Projetos e Voluntariado</h2>
                    <p class="section-subtitle">O seu tempo e talento podem salvar vidas. Conheça nossas frentes de atuação.</p>
                    <div class="grid-container">
                        <div class="col-12 col-md-6 col-lg-4">
                            <article class="card">
                                <picture>
                                    <source srcset="imagens/gatos-e-cachorros.webp" type="image/webp">
                                    <source srcset="imagens/gatos-e-cachorros.jpg" type="image/jpeg">
                                    <img src="imagens/gatos-e-cachorros.jpg" alt="Animal resgatado" class="card-image">
                                </picture>
                                <div class="card-body">
                                    <h3 class="card-title">Equipe de Resgate</h3>
                                    <span class="badge">Linha de Frente</span>
                                    <p>Atue diretamente no resgate de animais em situação de risco, oferecendo os primeiros socorros e transporte seguro para nosso abrigo.</p>
                                    <a href="#/cadastro" class="btn btn-primary">Quero participar</a>
                                </div>
                            </article>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <article class="card">
                                <picture>
                                    <source srcset="imagens/cachorro-gato-abraco.webp" type="image/webp">
                                    <source srcset="imagens/cachorro-gato-abraco.jpg" type="image/jpeg">
                                    <img src="imagens/cachorro-gato-abraco.jpg" alt="Cão e gato no abrigo" class="card-image">
                                </picture>
                                <div class="card-body">
                                    <h3 class="card-title">Cuidados no Abrigo</h3>
                                    <span class="badge badge-secondary">Essencial</span>
                                    <p>Ajude na limpeza, alimentação, medicação e, o mais importante, na socialização e carinho dos animais que aguardam um lar.</p>
                                    <a href="#/cadastro" class="btn btn-primary">Quero participar</a>
                                </div>
                            </article>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <article class="card">
                                <picture>
                                    <source srcset="imagens/gato-e-cachorro.webp" type="image/webp">
                                    <source srcset="imagens/gato-e-cachorro.jpg" type="image/jpeg">
                                    <img src="imagens/gato-e-cachorro.jpg" alt="Pessoa com animal" class="card-image">
                                </picture>
                                <div class="card-body">
                                    <h3 class="card-title">Feiras de Adoção</h3>
                                    <span class="badge badge-tertiary">Eventos</span>
                                    <p>Nossa ponte para um final feliz. Ajude na organização, transporte e apresentação dos animais em nossas feiras de adoção.</p>
                                    <a href="#/cadastro" class="btn btn-primary">Quero participar</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="doacao" class="page-section cta-section">
                    <div id="modal-doacao" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
                        <div class="modal-content">
                            <span class="modal-close" tabindex="0" aria-label="Fechar modal">&times;</span>
                            <h3 id="modal-title">Obrigado por sua doação!</h3>
                            <p>Sua contribuição via Pix foi recebida. Graças a você, podemos continuar nosso trabalho.</p>
                            <div class="alert alert-success">Chave Pix: 123.456.789-00</div>
                        </div>
                    </div>
                    <div class="grid-container align-items-center">
                        <div class="col-12 col-md-6">
                            <h2 class="section-title">Faça uma Doação</h2>
                            <p>Não pode ser voluntário? Sua contribuição financeira é vital. Ela custeia ração, vacinas, cirurgias e a manutenção do nosso espaço. Qualquer valor faz a diferença.</p>
                            <button class="btn btn-primary btn-lg" id="btn-doar-pix">Doar com Pix</button>
                            <button class="btn btn-secondary" disabled>Doar (Cartão - em breve)</button>
                        </div>
                        <div class="col-12 col-md-6">
                            <picture>
                                <source srcset="imagens/gato-e-cachorro.webp" type="image/webp">
                                <source srcset="imagens/gato-e-cachorro.jpg" type="image/jpeg">
                                <img src="imagens/gato-e-cachorro.jpg" alt="Cachorro e gato" class="img-fluid rounded">
                            </picture>
                        </div>
                    </div>
                </section>
            </main>
        `,
        cadastro: `
            <main class="container">
                <section class="page-section">
                    <div class="grid-container align-items-center">
                        <div class="col-12 col-md-7">
                            <h2 class="section-title">Formulário de Voluntariado</h2>
                            <p class="section-subtitle">Preencha seus dados para entrarmos em contato.</p>
                                
                            <div class="alert" id="form-feedback" style="display: none;" role="alert" aria-live="assertive"></div>
                        
                            <form id="form-cadastro" class="form-styled grid-container" novalidate>
                                <fieldset class="col-12">
                                    <legend>Dados Pessoais</legend>
                                    <div class="form-group col-12 col-lg-6">
                                        <label for="nome">Nome Completo</label>
                                        <input type="text" id="nome" name="nome" required placeholder="Seu nome completo" minlength="3">
                                    </div>
                                    <div class="form-group col-12 col-lg-6">
                                        <label for="email">E-mail</label>
                                        <input type="email" id="email" name="email" required placeholder="exemplo@email.com">
                                    </div>
                                    <div class="form-group col-12 col-md-4">
                                        <label for="nascimento">Data de Nascimento</label>
                                        <input type="date" id="nascimento" name="nascimento" required>
                                    </div>
                                    <div class="form-group col-12 col-md-4">
                                        <label for="cpf">CPF</label>
                                        <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00"
                                                pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Digite um CPF no formato 000.000.000-00">
                                    </div>
                                    <div class="form-group col-12 col-md-4">
                                        <label for="telefone">Telefone / WhatsApp</label>
                                        <input type="tel" id="telefone" name="telefone" required placeholder="(00) 90000-0000"
                                                pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" title="Digite um telefone no formato (00) 90000-0000">
                                    </div>
                                </fieldset>
                                <fieldset class="col-12">
                                    <legend>Endereço</legend>
                                    <div class="form-group col-12 col-md-4">
                                        <label for="cep">CEP</label>
                                        <input type="text" id="cep" name="cep" required placeholder="00000-000"
                                                pattern="\\d{5}-\\d{3}" title="Digite um CEP no formato 00000-000">
                                    </div>
                                    <div class="form-group col-12 col-md-8">
                                        <label for="endereco">Logradouro</label>
                                        <input type="text" id="endereco" name="endereco" required placeholder="Rua, Avenida, etc.">
                                    </div>
                                    <div class="form-group col-12 col-md-4">
                                        <label for="numero">Número</label>
                                        <input type="text" id="numero" name="numero" required placeholder="123">
                                    </div>
                                    <div class="form-group col-12 col-md-8">
                                        <label for="cidade">Cidade</label>
                                        <input type="text" id="cidade" name="cidade" required>
                                    </div>
                                    <div class="form-group col-12">
                                        <label for="estado">Estado</label>
                                        <select id="estado" name="estado" required>
                                            <option value="">Selecione...</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value_comentarios="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                    </div>
                                </fieldset>
                                <div class="col-12 form-actions">
                                    <button type="submit" class="btn btn-primary btn-lg">Enviar Cadastro</button>
                                    <button type="reset" class="btn btn-secondary">Limpar</button>
                                </div>
                            </form>
                        </div> 
                        <div class="col-12 col-md-5">
                            <picture>
                                <source srcset="imagens/gato-voluntario.webp" type="image/webp">
                                <source srcset="imagens/gato-voluntario.jpg" type="image/jpeg">
                                <img src="imagens/gato-voluntario.jpg" alt="Um gato simpático olhando para a câmera." class="img-fluid rounded shadow-lg">
                            </picture>
                        </div> 
                    </div> 
                </section>
            </main>
        `
    };

    const appRoot = document.getElementById("app-root");

    function navigate() {
        const path = window.location.hash || "#/";
        
        let pageKey = "home"; 
        let anchor = null;
        let pageTitle = "Vira-Amor - Página Inicial";
        let bodyClass = "home";

        if (path === "#/projetos") {
            pageKey = "projetos";
            pageTitle = "Projetos - Vira-Amor";
            bodyClass = "page-projetos";
        } else if (path.startsWith("#/projetos#")) {
            pageKey = "projetos";
            pageTitle = "Projetos - Vira-Amor";
            bodyClass = "page-projetos";
            anchor = path.split("#")[2]; 
        } else if (path === "#/cadastro") {
            pageKey = "cadastro";
            pageTitle = "Cadastro - Vira-Amor";
            bodyClass = "page-cadastro";
        }

        appRoot.innerHTML = templates[pageKey];
        
        document.body.className = document.body.classList.contains('dark-mode') ? `dark-mode ${bodyClass}` : bodyClass;
        document.title = pageTitle;

        updateActiveNav(path);

        if (pageKey === "projetos") {
            initProjetosModal();
        } else if (pageKey === "cadastro") {
            initFormValidation();
        }
        
        if (anchor) {
            const element = document.getElementById(anchor);
            if(element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }

    function updateActiveNav(path) {
        document.querySelectorAll(".main-nav a").forEach(link => {
            link.classList.remove("active");
            
            const linkPath = new URL(link.href).hash; 
            
            if (path.startsWith(linkPath) && linkPath !== '#/') {
                 link.classList.add("active");
            } else if ((path === '#/' || path === '') && linkPath === '#/') {
                 link.classList.add("active");
            }
        });
    }

    function initFormValidation() {
        const form = document.getElementById("form-cadastro");
        const feedbackDiv = document.getElementById("form-feedback");

        if (form && feedbackDiv) {
            form.addEventListener("submit", function(event) {
                event.preventDefault();

                let isValid = true;
                let errorMessages = [];
                
                form.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
                
                form.querySelectorAll("[required]").forEach(input => {
                    if (!input.value) {
                        isValid = false;
                        const label = input.previousElementSibling?.innerText || input.name;
                        errorMessages.push(`O campo "${label}" é obrigatório.`);
                        input.classList.add("is-invalid");
                    }
                });
                
                form.querySelectorAll("[pattern]").forEach(input => {
                    if (input.value) { 
                        const pattern = new RegExp(input.pattern);
                        if (!pattern.test(input.value)) {
                            isValid = false;
                            const label = input.previousElementSibling?.innerText || input.name;
                            const title = input.title || `formato inválido`;
                            errorMessages.push(`O campo "${label}" está com formato incorreto. (${title})`);
                            input.classList.add("is-invalid");
                        }
                    }
                });

                const emailInput = form.querySelector("[type='email']");
                if (emailInput && emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                    isValid = false;
                    errorMessages.push("O formato do e-mail é inválido.");
                    emailInput.classList.add("is-invalid");
                }
                
                if (isValid) {
                    feedbackDiv.innerHTML = "<strong>Cadastro enviado com sucesso!</strong> Entraremos em contato em breve.";
                    feedbackDiv.className = "alert alert-success";
                    feedbackDiv.style.display = "block";
                    form.reset();
                } else {
                    feedbackDiv.innerHTML = "<strong>Ops! Encontramos alguns erros:</strong><ul>" + 
                                            errorMessages.map(msg => `<li>${msg}</li>`).join('') + 
                                            "</ul>";
                    feedbackDiv.className = "alert alert-error";
                    feedbackDiv.style.display = "block";
                }
                
                feedbackDiv.scrollIntoView({ behavior: "smooth", block: "center" });
            });
        }
    }

    function initProjetosModal() {
        const modal = document.getElementById("modal-doacao");
        const btnOpen = document.getElementById("btn-doar-pix");
        
        if (!modal || !btnOpen) {
            return;
        }

        const btnClose = modal.querySelector(".modal-close");
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), .modal-close');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        let lastFocusedElement;

        const openModal = () => {
            lastFocusedElement = document.activeElement;
            modal.style.display = "flex";
            modal.setAttribute("aria-hidden", "false");
            btnClose.focus();
        };

        const closeModal = () => {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
            if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
        };

        btnOpen.addEventListener("click", openModal);
        btnClose.addEventListener("click", closeModal);

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        modal.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
            
            if (e.key === "Tab") {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    window.addEventListener("hashchange", navigate);
    
    initMobileMenu();
    initThemeToggle();
    initDropdownNav(); 
    
    navigate(); 

    document.addEventListener("click", (e) => {
        const mainNav = document.querySelector(".main-nav");
        const menuToggle = document.getElementById("menu-toggle");

        if (mainNav && mainNav.classList.contains("is-open")) {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        }

        if (!e.target.closest(".dropdown")) {
            closeAllDropdowns(null); 
        }
    });

});
