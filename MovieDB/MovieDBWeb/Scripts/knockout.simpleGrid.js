




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>knockout/examples/resources/knockout.simpleGrid.js at gh-pages · knockout/knockout</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>
    <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="knockout/knockout" name="twitter:title" /><meta content="knockout - Knockout makes it easier to create rich, responsive UIs with JavaScript" name="twitter:description" /><meta content="https://1.gravatar.com/avatar/10395d0d7f3365fd1526cd7e14fab62a?d=https%3A%2F%2Fidenticons.github.com%2F2de57454b29b9ee91abdffc77991f059.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://1.gravatar.com/avatar/10395d0d7f3365fd1526cd7e14fab62a?d=https%3A%2F%2Fidenticons.github.com%2F2de57454b29b9ee91abdffc77991f059.png&amp;r=x&amp;s=400" property="og:image" /><meta content="knockout/knockout" property="og:title" /><meta content="https://github.com/knockout/knockout" property="og:url" /><meta content="knockout - Knockout makes it easier to create rich, responsive UIs with JavaScript" property="og:description" />

    <meta name="hostname" content="github-fe136-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (60139581e1) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CFFA864B:60EF:ADBA2C8:52E6AC2C" name="octolytics-dimension-request_id" /><meta content="4106830" name="octolytics-actor-id" /><meta content="bionictrip" name="octolytics-actor-login" /><meta content="5b6f09c29c568531e60cb6fcc988793524f91ee93b99469a663bf0edddba7f60" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="PAPhwu9gIcsXYjExxf7itGdOnbYy/Bc6iAyhSsk5bIo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-12584d859a69c9f66deca12aa0588ba3a516727c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-86050ea70e9ba43d385d71b8b90a231860f6c086.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-2086b76396d7018acf390457357b14121f3e16f3.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-623e1b19c2d602365ac35e11d575fe153f82e21d.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="b9fb693c938d02d6391109f15f6a0779">

        <link data-pjax-transient rel='permalink' href='/knockout/knockout/blob/fdcbd92af6c747e8fbd1a3aa1e6c385011054a7a/examples/resources/knockout.simpleGrid.js'>

  <meta name="description" content="knockout - Knockout makes it easier to create rich, responsive UIs with JavaScript" />

  <meta content="3863375" name="octolytics-dimension-user_id" /><meta content="knockout" name="octolytics-dimension-user_login" /><meta content="757363" name="octolytics-dimension-repository_id" /><meta content="knockout/knockout" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="757363" name="octolytics-dimension-repository_network_root_id" /><meta content="knockout/knockout" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/knockout/knockout/commits/gh-pages.atom" rel="alternate" title="Recent Commits to knockout:gh-pages" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="bionictrip"
      data-repo="knockout/knockout"
      data-branch="gh-pages"
      data-sha="e46f98b3acc14ef53c01638901c797bef7d36bc8"
  >

    <input type="hidden" name="nwo" value="knockout/knockout" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/bionictrip" class="name">
        <img alt="bionictrip" height="20" src="https://2.gravatar.com/avatar/6d25728c46a52e371dc5ce61ba4f72eb?d=https%3A%2F%2Fidenticons.github.com%2Fd3cefa550e2f79b8511f0a12f15c866d.png&amp;r=x&amp;s=140" width="20" /> bionictrip
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" title="Create new..." aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings "
        title="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="knockout/knockout">This repository</span>
    </li>
      <li>
        <a href="/knockout/knockout/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="PAPhwu9gIcsXYjExxf7itGdOnbYy/Bc6iAyhSsk5bIo=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="757363" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/knockout/knockout/watchers">
        414
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/knockout/knockout/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/knockout/knockout/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/knockout/knockout/stargazers">
        4,562
      </a>
  </div>

  </li>


        <li>
          <a href="/knockout/knockout/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/knockout/knockout/network" class="social-count">751</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/knockout" class="url fn" itemprop="url" rel="author"><span itemprop="title">knockout</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/knockout/knockout" class="js-current-repository js-repo-home-link">knockout</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/knockout/knockout/tree/gh-pages" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /knockout/knockout/tree/gh-pages">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/knockout/knockout/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /knockout/knockout/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>313</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/knockout/knockout/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /knockout/knockout/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>78</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/knockout/knockout/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /knockout/knockout/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/knockout/knockout/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /knockout/knockout/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/knockout/knockout/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /knockout/knockout/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/knockout/knockout/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /knockout/knockout/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/knockout/knockout.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/knockout/knockout.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:knockout/knockout.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:knockout/knockout.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/knockout/knockout" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/knockout/knockout" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/knockout/knockout" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/knockout/knockout/archive/gh-pages.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b643d2550cf02ca043f44002c88b3065 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/knockout/knockout/find/gh-pages" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="gh-pages"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">gh-pages</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/627-computed-context/examples/resources/knockout.simpleGrid.js"
                 data-name="627-computed-context"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="627-computed-context">627-computed-context</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/647-allow-unselected-value/examples/resources/knockout.simpleGrid.js"
                 data-name="647-allow-unselected-value"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="647-allow-unselected-value">647-allow-unselected-value</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/1054-observableArray-filter-writes/examples/resources/knockout.simpleGrid.js"
                 data-name="1054-observableArray-filter-writes"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1054-observableArray-filter-writes">1054-observableArray-filter-writes</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/1158-update-value-on-rejected-change/examples/resources/knockout.simpleGrid.js"
                 data-name="1158-update-value-on-rejected-change"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1158-update-value-on-rejected-change">1158-update-value-on-rejected-change</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/1255-track-observables-in-getBindingAccessors/examples/resources/knockout.simpleGrid.js"
                 data-name="1255-track-observables-in-getBindingAccessors"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1255-track-observables-in-getBindingAccessors">1255-track-observables-in-getBindingAccessors</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/asyncComputed/examples/resources/knockout.simpleGrid.js"
                 data-name="asyncComputed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="asyncComputed">asyncComputed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/gh-pages/examples/resources/knockout.simpleGrid.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/gh-pages-3.0.0/examples/resources/knockout.simpleGrid.js"
                 data-name="gh-pages-3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages-3.0.0">gh-pages-3.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/gh-pages-3.0.0-preprocessing/examples/resources/knockout.simpleGrid.js"
                 data-name="gh-pages-3.0.0-preprocessing"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages-3.0.0-preprocessing">gh-pages-3.0.0-preprocessing</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/gh-pages-observable-viewmodels/examples/resources/knockout.simpleGrid.js"
                 data-name="gh-pages-observable-viewmodels"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages-observable-viewmodels">gh-pages-observable-viewmodels</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/master/examples/resources/knockout.simpleGrid.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/blob/virtual-element-with-valueless-binding/examples/resources/knockout.simpleGrid.js"
                 data-name="virtual-element-with-valueless-binding"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="virtual-element-with-valueless-binding">virtual-element-with-valueless-binding</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v3.0.0rc/examples/resources/knockout.simpleGrid.js"
                 data-name="v3.0.0rc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0rc">v3.0.0rc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v3.0.0beta/examples/resources/knockout.simpleGrid.js"
                 data-name="v3.0.0beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0beta">v3.0.0beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v3.0.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v3.0.0">v3.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.3.0rc/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.3.0rc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.0rc">v2.3.0rc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.3.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.0">v2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.2.1/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.1">v2.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.2.0rc/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.2.0rc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.0rc">v2.2.0rc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.2.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.1.0rc2/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.1.0rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0rc2">v2.1.0rc2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.1.0rc/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.1.0rc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0rc">v2.1.0rc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.1.0beta/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.1.0beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0beta">v2.1.0beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.1.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.0.0rc2/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.0.0rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0rc2">v2.0.0rc2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.0.0rc/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.0.0rc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0rc">v2.0.0rc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v2.0.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.3.0rc/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.3.0rc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0rc">v1.3.0rc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.3.0beta/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.3.0beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0beta">v1.3.0beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.2.1/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.2.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.1.2/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.1.1/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.1.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.0.5/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.0.4/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.0.3/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.0.2/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.0.1/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/knockout/knockout/tree/v1.0.0/examples/resources/knockout.simpleGrid.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/knockout/knockout/tree/gh-pages" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">knockout</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/knockout/knockout/tree/gh-pages/examples" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">examples</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/knockout/knockout/tree/gh-pages/examples/resources" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">resources</span></a></span><span class="separator"> / </span><strong class="final-path">knockout.simpleGrid.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="examples/resources/knockout.simpleGrid.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/knockout/knockout/contributors/gh-pages/examples/resources/knockout.simpleGrid.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>98 lines (87 sloc)</span>
        <span>5.136 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="github-windows://openRepo/https://github.com/knockout/knockout?branch=gh-pages&amp;filepath=examples%2Fresources%2Fknockout.simpleGrid.js" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/knockout/knockout/edit/gh-pages/examples/resources/knockout.simpleGrid.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/knockout/knockout/raw/gh-pages/examples/resources/knockout.simpleGrid.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/knockout/knockout/blame/gh-pages/examples/resources/knockout.simpleGrid.js" class="button minibutton ">Blame</a>
          <a href="/knockout/knockout/commits/gh-pages/examples/resources/knockout.simpleGrid.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/knockout/knockout/delete/gh-pages/examples/resources/knockout.simpleGrid.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>

            </td>
            <td class="blob-line-code">
                    <div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">// This is an example of one possible way to make a reusable component (or &#39;plugin&#39;), consisting of:</span></div><div class='line' id='LC2'><span class="c1">//  * A view model class, which gives a way to configure the component and to interact with it (e.g., by exposing currentPageIndex as an observable, external code can change the page index)</span></div><div class='line' id='LC3'><span class="c1">//  * A custom binding (ko.bindingHandlers.simpleGrid in this example) so a developer can place instances of it into the DOM</span></div><div class='line' id='LC4'><span class="c1">//     - in this example, the custom binding works by rendering some predefined templates using the ko.jqueryTmplTemplateEngine template engine</span></div><div class='line' id='LC5'><span class="c1">//</span></div><div class='line' id='LC6'><span class="c1">// There are loads of ways this grid example could be expanded. For example,</span></div><div class='line' id='LC7'><span class="c1">//  * Letting the developer override the templates used to create the table header, table body, and page links div</span></div><div class='line' id='LC8'><span class="c1">//  * Adding a &quot;sort by clicking column headers&quot; option</span></div><div class='line' id='LC9'><span class="c1">//  * Creating some API to fetch table data using Ajax requests</span></div><div class='line' id='LC10'><span class="c1">//  ... etc</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Private function</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getColumnsForScaffolding</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="k">typeof</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">columns</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">propertyName</span> <span class="k">in</span> <span class="nx">data</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">columns</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">headerText</span><span class="o">:</span> <span class="nx">propertyName</span><span class="p">,</span> <span class="nx">rowText</span><span class="o">:</span> <span class="nx">propertyName</span> <span class="p">});</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">columns</span><span class="p">;</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ko</span><span class="p">.</span><span class="nx">simpleGrid</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Defines a view model class you can use to populate a grid</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewModel</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">configuration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">configuration</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentPageIndex</span> <span class="o">=</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pageSize</span> <span class="o">=</span> <span class="nx">configuration</span><span class="p">.</span><span class="nx">pageSize</span> <span class="o">||</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If you don&#39;t specify columns configuration, we&#39;ll use scaffolding</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">columns</span> <span class="o">=</span> <span class="nx">configuration</span><span class="p">.</span><span class="nx">columns</span> <span class="o">||</span> <span class="nx">getColumnsForScaffolding</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">utils</span><span class="p">.</span><span class="nx">unwrapObservable</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">));</span> </div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">itemsOnCurrentPage</span> <span class="o">=</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">computed</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">startIndex</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">pageSize</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">currentPageIndex</span><span class="p">();</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">startIndex</span><span class="p">,</span> <span class="nx">startIndex</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">pageSize</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxPageIndex</span> <span class="o">=</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">computed</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">utils</span><span class="p">.</span><span class="nx">unwrapObservable</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">).</span><span class="nx">length</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">pageSize</span><span class="p">);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Templates used to render the grid</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">templateEngine</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">jqueryTmplTemplateEngine</span><span class="p">();</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">templateEngine</span><span class="p">.</span><span class="nx">addTemplate</span><span class="p">(</span><span class="s2">&quot;ko_simpleGrid_grid&quot;</span><span class="p">,</span> <span class="s2">&quot;\</span></div><div class='line' id='LC47'><span class="s2">                    &lt;table class=\&quot;ko-grid\&quot; cellspacing=\&quot;0\&quot;&gt;\</span></div><div class='line' id='LC48'><span class="s2">                        &lt;thead&gt;\</span></div><div class='line' id='LC49'><span class="s2">                            &lt;tr&gt;\</span></div><div class='line' id='LC50'><span class="s2">                                {{each(i, columnDefinition) columns}}\</span></div><div class='line' id='LC51'><span class="s2">                                    &lt;th&gt;${ columnDefinition.headerText }&lt;/th&gt;\</span></div><div class='line' id='LC52'><span class="s2">                                {{/each}}\</span></div><div class='line' id='LC53'><span class="s2">                            &lt;/tr&gt;\</span></div><div class='line' id='LC54'><span class="s2">                        &lt;/thead&gt;\</span></div><div class='line' id='LC55'><span class="s2">                        &lt;tbody&gt;\</span></div><div class='line' id='LC56'><span class="s2">                            {{each(i, row) itemsOnCurrentPage()}}\</span></div><div class='line' id='LC57'><span class="s2">                                &lt;tr class=\&quot;${ i % 2 == 0 ? &#39;even&#39; : &#39;odd&#39; }\&quot;&gt;\</span></div><div class='line' id='LC58'><span class="s2">                                    {{each(j, columnDefinition) columns}}\</span></div><div class='line' id='LC59'><span class="s2">                                        &lt;td&gt;${ typeof columnDefinition.rowText == &#39;function&#39; ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }&lt;/td&gt;\</span></div><div class='line' id='LC60'><span class="s2">                                    {{/each}}\</span></div><div class='line' id='LC61'><span class="s2">                                &lt;/tr&gt;\</span></div><div class='line' id='LC62'><span class="s2">                            {{/each}}\</span></div><div class='line' id='LC63'><span class="s2">                        &lt;/tbody&gt;\</span></div><div class='line' id='LC64'><span class="s2">                    &lt;/table&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">templateEngine</span><span class="p">.</span><span class="nx">addTemplate</span><span class="p">(</span><span class="s2">&quot;ko_simpleGrid_pageLinks&quot;</span><span class="p">,</span> <span class="s2">&quot;\</span></div><div class='line' id='LC66'><span class="s2">                    &lt;div class=\&quot;ko-grid-pageLinks\&quot;&gt;\</span></div><div class='line' id='LC67'><span class="s2">                        &lt;span&gt;Page:&lt;/span&gt;\</span></div><div class='line' id='LC68'><span class="s2">                        {{each(i) ko.utils.range(1, maxPageIndex)}}\</span></div><div class='line' id='LC69'><span class="s2">                            &lt;a href=\&quot;#\&quot; data-bind=\&quot;click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\&quot;&gt;\</span></div><div class='line' id='LC70'><span class="s2">                                ${ i + 1 }\</span></div><div class='line' id='LC71'><span class="s2">                            &lt;/a&gt;\</span></div><div class='line' id='LC72'><span class="s2">                        {{/each}}\</span></div><div class='line' id='LC73'><span class="s2">                    &lt;/div&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The &quot;simpleGrid&quot; binding</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ko</span><span class="p">.</span><span class="nx">bindingHandlers</span><span class="p">.</span><span class="nx">simpleGrid</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This method is called to initialize the node, and will also be called again if you change what the grid is bound to</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">viewModelAccessor</span><span class="p">,</span> <span class="nx">allBindingsAccessor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">viewModel</span> <span class="o">=</span> <span class="nx">viewModelAccessor</span><span class="p">(),</span> <span class="nx">allBindings</span> <span class="o">=</span> <span class="nx">allBindingsAccessor</span><span class="p">();</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Empty the element</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ko</span><span class="p">.</span><span class="nx">removeNode</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Allow the default templates to be overridden</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">gridTemplateName</span>      <span class="o">=</span> <span class="nx">allBindings</span><span class="p">.</span><span class="nx">simpleGridTemplate</span> <span class="o">||</span> <span class="s2">&quot;ko_simpleGrid_grid&quot;</span><span class="p">,</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pageLinksTemplateName</span> <span class="o">=</span> <span class="nx">allBindings</span><span class="p">.</span><span class="nx">simpleGridPagerTemplate</span> <span class="o">||</span> <span class="s2">&quot;ko_simpleGrid_pageLinks&quot;</span><span class="p">;</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Render the main grid</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">gridContainer</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;DIV&quot;</span><span class="p">));</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ko</span><span class="p">.</span><span class="nx">renderTemplate</span><span class="p">(</span><span class="nx">gridTemplateName</span><span class="p">,</span> <span class="nx">viewModel</span><span class="p">,</span> <span class="p">{</span> <span class="nx">templateEngine</span><span class="o">:</span> <span class="nx">templateEngine</span> <span class="p">},</span> <span class="nx">gridContainer</span><span class="p">,</span> <span class="s2">&quot;replaceNode&quot;</span><span class="p">);</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Render the page links</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pageLinksContainer</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;DIV&quot;</span><span class="p">));</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ko</span><span class="p">.</span><span class="nx">renderTemplate</span><span class="p">(</span><span class="nx">pageLinksTemplateName</span><span class="p">,</span> <span class="nx">viewModel</span><span class="p">,</span> <span class="p">{</span> <span class="nx">templateEngine</span><span class="o">:</span> <span class="nx">templateEngine</span> <span class="p">},</span> <span class="nx">pageLinksContainer</span><span class="p">,</span> <span class="s2">&quot;replaceNode&quot;</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC98'><span class="p">})();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07022s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/knockout/knockout/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

