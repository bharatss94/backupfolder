<?php

/* themes/zircon/templates/page.html.twig */
class __TwigTemplate_f76859725b53ba14fdf49fdbb09c10e038f29e31f0b4a892997be25ad728a2ea extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 3);
        $filters = array("raw" => 1, "t" => 11);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array('raw', 't'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<div class=\"page\" class=\"page\" ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["page_css"]) ? $context["page_css"] : null)));
        echo ">

";
        // line 3
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "show_skins_menu", array())) {
            // line 4
            echo "    ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "show_skins_menu", array())));
            echo "
";
        }
        // line 6
        echo "  
<a name=\"Top\" id=\"Top\"></a>
<header id=\"header\" class=\"header\" role=\"header\">
  <div class=\"container\">
    ";
        // line 10
        if ((isset($context["logo"]) ? $context["logo"] : null)) {
            // line 11
            echo "      <a id=\"logo\" href=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["front_page"]) ? $context["front_page"] : null), "html", null, true));
            echo "\" title=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Home")));
            echo "\" rel=\"home\">
        <img src=\"";
            // line 12
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["logo"]) ? $context["logo"] : null), "html", null, true));
            echo "\" alt=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Home")));
            echo "\"/>
      </a>
    ";
        }
        // line 15
        echo "
    ";
        // line 16
        if (((isset($context["site_name"]) ? $context["site_name"] : null) || (isset($context["site_slogan"]) ? $context["site_slogan"] : null))) {
            // line 17
            echo "      <div class=\"name-and-slogan\">

        ";
            // line 20
            echo "        ";
            if ((isset($context["title"]) ? $context["title"] : null)) {
                // line 21
                echo "          <strong class=\"site-name\">
            <a href=\"";
                // line 22
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["front_page"]) ? $context["front_page"] : null), "html", null, true));
                echo "\" title=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Home")));
                echo "\" rel=\"home\">";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["site_name"]) ? $context["site_name"] : null), "html", null, true));
                echo "</a>
          </strong>
        ";
            } else {
                // line 25
                echo "          <h1 class=\"site-name\">
            <a href=\"";
                // line 26
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["front_page"]) ? $context["front_page"] : null), "html", null, true));
                echo "\" title=\"";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Home")));
                echo "\" rel=\"home\">";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["site_name"]) ? $context["site_name"] : null), "html", null, true));
                echo "</a>
          </h1>
        ";
            }
            // line 29
            echo "
        ";
            // line 30
            if ((isset($context["site_slogan"]) ? $context["site_slogan"] : null)) {
                // line 31
                echo "          <div class=\"site-slogan\">";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["site_slogan"]) ? $context["site_slogan"] : null), "html", null, true));
                echo "</div>
        ";
            }
            // line 33
            echo "      </div>
   ";
        }
        // line 35
        echo "   <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-menu-inner\">
      <span class=\"sr-only\">Toggle navigation</span>
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
    </button>

    ";
        // line 42
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "html", null, true));
        echo "
    
  </div>
</header>

  ";
        // line 47
        if (((isset($context["main_menu"]) ? $context["main_menu"] : null) || (isset($context["secondary_menu"]) ? $context["secondary_menu"] : null))) {
            // line 48
            echo "    <nav id=\"navigation\" class=\"navigation\" role=\"navigation\">
      <div class=\"container\">
        ";
            // line 50
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["main_menu"]) ? $context["main_menu"] : null), "html", null, true));
            echo "
        ";
            // line 51
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["secondary_menu"]) ? $context["secondary_menu"] : null), "html", null, true));
            echo "
      </div>
    </nav>
  ";
        }
        // line 55
        echo "
  ";
        // line 56
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "main_menu", array())) {
            // line 57
            echo "    <nav id=\"main-menu\" class=\"navbar navbar-default\" role=\"navigation\">\t
  \t\t  <div class=\"collapse navbar-collapse\" id=\"main-menu-inner\">
          <div class=\"container\">
            ";
            // line 60
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "main_menu", array()), "html", null, true));
            echo "\t\t\t\t\t\t
          </div>
        </div>
    </nav>
  ";
        }
        // line 65
        echo "
  ";
        // line 66
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "slideshow", array())) {
            // line 67
            echo "    <section id=\"slideshow\" class=\"slideshow\">
      <div class=\"container\">
        ";
            // line 69
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "slideshow", array()), "html", null, true));
            echo "
      </div>
    </section>
  ";
        }
        // line 73
        echo "
  ";
        // line 74
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "featured", array())) {
            // line 75
            echo "    <section id=\"featured\" class=\"featured\">
      <div class=\"container\">
        ";
            // line 77
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "featured", array()), "html", null, true));
            echo "
      </div>
    </section>
  ";
        }
        // line 81
        echo "
  ";
        // line 82
        if ((isset($context["messages"]) ? $context["messages"] : null)) {
            // line 83
            echo "    <section id=\"messages\" class=\"messages\">
      <div class=\"container\">
        ";
            // line 85
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["messages"]) ? $context["messages"] : null), "html", null, true));
            echo "
      </div>
    </section>
  ";
        }
        // line 89
        echo "
  ";
        // line 90
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "help", array())) {
            // line 91
            echo "    <section id=\"help\" class=\"help\">
      <div class=\"container\">
        ";
            // line 93
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "help", array()), "html", null, true));
            echo "
      </div>
    </section>
  ";
        }
        // line 96
        echo "    

  <section id=\"main\" class=\"main\" role=\"main\">
    <a id=\"main-content\"></a>
    <div class=\"container\">
      <div class=\"row\">
        
        ";
        // line 103
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_first", array())) {
            // line 104
            echo "          <aside class=\"sidebar-first sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12\" role=\"complementary\">
            ";
            // line 105
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_first", array()), "html", null, true));
            echo "
          </aside>
        ";
        }
        // line 108
        echo "\t\t
        <div class=\"content col-lg-";
        // line 109
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "main_content_width", array()), "html", null, true));
        echo " col-md-";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "main_content_width", array()), "html", null, true));
        echo " col-sm-12 col-xs-12\">
          ";
        // line 110
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "highlighted", array()), "html", null, true));
        echo "

          ";
        // line 112
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
          ";
        // line 113
        if ((isset($context["title"]) ? $context["title"] : null)) {
            // line 114
            echo "            <h1>";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true));
            echo "</h1>
          ";
        }
        // line 116
        echo "          ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "

          ";
        // line 118
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["tabs"]) ? $context["tabs"] : null), "html", null, true));
        echo "

          ";
        // line 120
        if ((isset($context["action_links"]) ? $context["action_links"] : null)) {
            // line 121
            echo "            <nav class=\"action-links\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["action_links"]) ? $context["action_links"] : null), "html", null, true));
            echo "</nav>
          ";
        }
        // line 123
        echo "
          ";
        // line 124
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array()), "html", null, true));
        echo "

          <!--";
        // line 126
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["feed_icons"]) ? $context["feed_icons"] : null), "html", null, true));
        echo "-->
        </div>

        ";
        // line 129
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_second", array())) {
            // line 130
            echo "          <aside class=\"sidebar-second sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12\" role=\"complementary\">
            ";
            // line 131
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_second", array()), "html", null, true));
            echo "
          </aside>
        ";
        }
        // line 134
        echo "      </div>
    </div>
  </section>

  ";
        // line 138
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_first_1", array())) {
            // line 139
            echo "    <section id=\"panel_first\" class=\"panel_first\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">
            ";
            // line 143
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_first_1", array()), "html", null, true));
            echo "
          </div>
        </div>
      </div>
    </section>
  ";
        }
        // line 149
        echo "    
  ";
        // line 150
        if (((($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_1", array()) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_2", array())) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_3", array())) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_4", array()))) {
            // line 151
            echo "    <section id=\"panel_second\" class=\"panel_second\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            ";
            // line 155
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_1", array()), "html", null, true));
            echo "
          </div>
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            ";
            // line 158
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_2", array()), "html", null, true));
            echo "
          </div>
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            ";
            // line 161
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_3", array()), "html", null, true));
            echo "
          </div>
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            ";
            // line 164
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "panel_second_4", array()), "html", null, true));
            echo "
          </div>
        </div>
      </div>
    </section>
  ";
        }
        // line 170
        echo "  
  ";
        // line 171
        if ((isset($context["breadcrumb"]) ? $context["breadcrumb"] : null)) {
            // line 172
            echo "    <section id=\"breadcrumb\" class=\"breadcrumb\">
      <div class=\"container\">
        ";
            // line 174
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["breadcrumb"]) ? $context["breadcrumb"] : null), "html", null, true));
            echo "
      </div>
    </section>
  ";
        }
        // line 178
        echo "  <a href=\"#Top\" class=\"btn-btt\" title=\"Back to Top\" style=\"display: block;\"></a>          

  ";
        // line 180
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer", array())) {
            // line 181
            echo "    <footer id=\"footer\" class=\"footer\" role=\"contentinfo\">
      <div class=\"container\">
        ";
            // line 183
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer", array()), "html", null, true));
            echo "
      </div>
    </footer>
  ";
        }
        // line 187
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/zircon/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  433 => 187,  426 => 183,  422 => 181,  420 => 180,  416 => 178,  409 => 174,  405 => 172,  403 => 171,  400 => 170,  391 => 164,  385 => 161,  379 => 158,  373 => 155,  367 => 151,  365 => 150,  362 => 149,  353 => 143,  347 => 139,  345 => 138,  339 => 134,  333 => 131,  330 => 130,  328 => 129,  322 => 126,  317 => 124,  314 => 123,  308 => 121,  306 => 120,  301 => 118,  295 => 116,  289 => 114,  287 => 113,  283 => 112,  278 => 110,  272 => 109,  269 => 108,  263 => 105,  260 => 104,  258 => 103,  249 => 96,  242 => 93,  238 => 91,  236 => 90,  233 => 89,  226 => 85,  222 => 83,  220 => 82,  217 => 81,  210 => 77,  206 => 75,  204 => 74,  201 => 73,  194 => 69,  190 => 67,  188 => 66,  185 => 65,  177 => 60,  172 => 57,  170 => 56,  167 => 55,  160 => 51,  156 => 50,  152 => 48,  150 => 47,  142 => 42,  133 => 35,  129 => 33,  123 => 31,  121 => 30,  118 => 29,  108 => 26,  105 => 25,  95 => 22,  92 => 21,  89 => 20,  85 => 17,  83 => 16,  80 => 15,  72 => 12,  65 => 11,  63 => 10,  57 => 6,  51 => 4,  49 => 3,  43 => 1,);
    }

    public function getSource()
    {
        return "<div class=\"page\" class=\"page\" {{ page_css |raw }}>

{% if page.show_skins_menu %}
    {{ page.show_skins_menu |raw }}
{% endif %}
  
<a name=\"Top\" id=\"Top\"></a>
<header id=\"header\" class=\"header\" role=\"header\">
  <div class=\"container\">
    {% if logo %}
      <a id=\"logo\" href=\"{{ front_page }}\" title=\"{{ 'Home'|t }}\" rel=\"home\">
        <img src=\"{{ logo }}\" alt=\"{{ 'Home'|t }}\"/>
      </a>
    {% endif %}

    {% if site_name or site_slogan %}
      <div class=\"name-and-slogan\">

        {# Use h1 when the content title is empty #}
        {% if title %}
          <strong class=\"site-name\">
            <a href=\"{{ front_page }}\" title=\"{{ 'Home'|t }}\" rel=\"home\">{{ site_name }}</a>
          </strong>
        {% else %}
          <h1 class=\"site-name\">
            <a href=\"{{ front_page }}\" title=\"{{ 'Home'|t }}\" rel=\"home\">{{ site_name }}</a>
          </h1>
        {% endif %}

        {% if site_slogan %}
          <div class=\"site-slogan\">{{ site_slogan }}</div>
        {% endif %}
      </div>
   {% endif %}
   <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-menu-inner\">
      <span class=\"sr-only\">Toggle navigation</span>
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
      <span class=\"icon-bar\"></span>
    </button>

    {{ page.header }}
    
  </div>
</header>

  {% if main_menu or secondary_menu %}
    <nav id=\"navigation\" class=\"navigation\" role=\"navigation\">
      <div class=\"container\">
        {{ main_menu }}
        {{ secondary_menu }}
      </div>
    </nav>
  {% endif %}

  {% if page.main_menu %}
    <nav id=\"main-menu\" class=\"navbar navbar-default\" role=\"navigation\">\t
  \t\t  <div class=\"collapse navbar-collapse\" id=\"main-menu-inner\">
          <div class=\"container\">
            {{ page.main_menu }}\t\t\t\t\t\t
          </div>
        </div>
    </nav>
  {% endif %}

  {% if page.slideshow %}
    <section id=\"slideshow\" class=\"slideshow\">
      <div class=\"container\">
        {{ page.slideshow }}
      </div>
    </section>
  {% endif %}

  {% if page.featured %}
    <section id=\"featured\" class=\"featured\">
      <div class=\"container\">
        {{ page.featured }}
      </div>
    </section>
  {% endif %}

  {% if messages %}
    <section id=\"messages\" class=\"messages\">
      <div class=\"container\">
        {{ messages }}
      </div>
    </section>
  {% endif %}

  {% if page.help %}
    <section id=\"help\" class=\"help\">
      <div class=\"container\">
        {{ page.help }}
      </div>
    </section>
  {% endif %}    

  <section id=\"main\" class=\"main\" role=\"main\">
    <a id=\"main-content\"></a>
    <div class=\"container\">
      <div class=\"row\">
        
        {% if page.sidebar_first %}
          <aside class=\"sidebar-first sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12\" role=\"complementary\">
            {{ page.sidebar_first }}
          </aside>
        {% endif %}
\t\t
        <div class=\"content col-lg-{{ page.main_content_width }} col-md-{{ page.main_content_width }} col-sm-12 col-xs-12\">
          {{ page.highlighted }}

          {{ title_prefix }}
          {% if title %}
            <h1>{{ title }}</h1>
          {% endif %}
          {{ title_suffix }}

          {{ tabs }}

          {% if action_links %}
            <nav class=\"action-links\">{{ action_links }}</nav>
          {% endif %}

          {{ page.content }}

          <!--{{ feed_icons }}-->
        </div>

        {% if page.sidebar_second %}
          <aside class=\"sidebar-second sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12\" role=\"complementary\">
            {{ page.sidebar_second }}
          </aside>
        {% endif %}
      </div>
    </div>
  </section>

  {% if page.panel_first_1 %}
    <section id=\"panel_first\" class=\"panel_first\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">
            {{ page.panel_first_1 }}
          </div>
        </div>
      </div>
    </section>
  {% endif %}
    
  {% if page.panel_second_1 or page.panel_second_2 or page.panel_second_3 or page.panel_second_4 %}
    <section id=\"panel_second\" class=\"panel_second\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            {{ page.panel_second_1 }}
          </div>
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            {{ page.panel_second_2 }}
          </div>
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            {{ page.panel_second_3 }}
          </div>
          <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">
            {{ page.panel_second_4 }}
          </div>
        </div>
      </div>
    </section>
  {% endif %}
  
  {% if breadcrumb %}
    <section id=\"breadcrumb\" class=\"breadcrumb\">
      <div class=\"container\">
        {{ breadcrumb }}
      </div>
    </section>
  {% endif %}
  <a href=\"#Top\" class=\"btn-btt\" title=\"Back to Top\" style=\"display: block;\"></a>          

  {% if page.footer %}
    <footer id=\"footer\" class=\"footer\" role=\"contentinfo\">
      <div class=\"container\">
        {{ page.footer }}
      </div>
    </footer>
  {% endif %}

</div>
";
    }
}
