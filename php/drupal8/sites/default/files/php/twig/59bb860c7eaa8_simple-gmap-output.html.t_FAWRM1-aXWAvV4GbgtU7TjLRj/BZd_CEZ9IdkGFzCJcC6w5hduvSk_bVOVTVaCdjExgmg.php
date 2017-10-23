<?php

/* modules/simple_gmap/templates/simple-gmap-output.html.twig */
class __TwigTemplate_d3432ba28937d2d4ab7297e73695e9ab9440c8493b8d15b138b635ecff91a58b extends Twig_Template
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
        $tags = array("if" => 29);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array(),
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

        // line 29
        if ((isset($context["include_map"]) ? $context["include_map"] : null)) {
            // line 30
            echo "  <iframe width=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["width"]) ? $context["width"] : null), "html", null, true));
            echo "\" height=\"";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["height"]) ? $context["height"] : null), "html", null, true));
            echo "\" frameborder=\"0\" style=\"border:0\" src=\"https://maps.google.com/maps?hl=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["langcode"]) ? $context["langcode"] : null), "html", null, true));
            echo "&amp;q=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url_suffix"]) ? $context["url_suffix"] : null), "html", null, true));
            echo "&amp;t=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["map_type"]) ? $context["map_type"] : null), "html", null, true));
            echo "&amp;z=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["zoom"]) ? $context["zoom"] : null), "html", null, true));
            echo "&amp;output=embed\"></iframe>
";
        }
        // line 32
        if ((isset($context["include_static_map"]) ? $context["include_static_map"] : null)) {
            // line 33
            echo "  <div class=\"simple-gmap-static-map\">
    <img src=\"https://maps.googleapis.com/maps/api/staticmap?size=";
            // line 34
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["width"]) ? $context["width"] : null), "html", null, true));
            echo "x";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["height"]) ? $context["height"] : null), "html", null, true));
            echo "&amp;scale=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["static_scale"]) ? $context["static_scale"] : null), "html", null, true));
            echo "&amp;zoom=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["zoom"]) ? $context["zoom"] : null), "html", null, true));
            echo "&amp;language=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["langcode"]) ? $context["langcode"] : null), "html", null, true));
            echo "&amp;maptype=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["static_map_type"]) ? $context["static_map_type"] : null), "html", null, true));
            echo "&amp;markers=color:red|";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url_suffix"]) ? $context["url_suffix"] : null), "html", null, true));
            echo "&amp;sensor=false&amp;key=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["apikey"]) ? $context["apikey"] : null), "html", null, true));
            echo "\" />
  </div>
";
        }
        // line 37
        if ((isset($context["include_link"]) ? $context["include_link"] : null)) {
            // line 38
            echo "  <p class=\"simple-gmap-link\"><a href=\"https://maps.google.com/maps?q=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["url_suffix"]) ? $context["url_suffix"] : null), "html", null, true));
            echo "&amp;hl=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["langcode"]) ? $context["langcode"] : null), "html", null, true));
            echo "&amp;t=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["map_type"]) ? $context["map_type"] : null), "html", null, true));
            echo "&amp;z=";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["zoom"]) ? $context["zoom"] : null), "html", null, true));
            echo "\" target=\"_blank\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["link_text"]) ? $context["link_text"] : null), "html", null, true));
            echo "</a></p>
";
        }
        // line 40
        if ( !twig_test_empty((isset($context["address_text"]) ? $context["address_text"] : null))) {
            // line 41
            echo "  <p class=\"simple-gmap-address\">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["address_text"]) ? $context["address_text"] : null), "html", null, true));
            echo "</p>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/simple_gmap/templates/simple-gmap-output.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 41,  102 => 40,  88 => 38,  86 => 37,  66 => 34,  63 => 33,  61 => 32,  45 => 30,  43 => 29,);
    }

    public function getSource()
    {
        return "{#
/**
 * @file
 * Displays the Simple Google Maps formatter.
 *
 * Available variables:
 * - include_map: TRUE if an embedded map should be displayed.
 * - include_static_map: TRUE if an embedded static map should be displayed.
 * - width: Width of map.
 * - height: Height of map.
 * - static_scale: For use with retinal displays. Can double the width and
 *   height of static map ( possible values 1 or 2 )
 * - include_link: TRUE if a link to a map should be displayed.
 * - link_text: Text of link to display.
 * - url_suffix: Suffix of URLs to send to Google Maps for embedded and linked
 *   maps. Contains the URL-encoded address.
 * - zoom: Zoom level for embedded and linked maps.
 * - address_text: Address text to display (empty if it should not be
 *   displayed).
 * - map_type: Type of map to use (Google code, such as 'm' or 't').
 * - langcode: Two-letter language code to use.
 * - static_map_type: Type of map to use for static map (Google code, such as
 *  'roadmap' or 'satellite')
 * - apikey: Google Maps API key (used for static maps only).
 *
 * @ingroup themeable
 */
#}
{% if include_map %}
  <iframe width=\"{{ width }}\" height=\"{{ height }}\" frameborder=\"0\" style=\"border:0\" src=\"https://maps.google.com/maps?hl={{ langcode }}&amp;q={{ url_suffix }}&amp;t={{ map_type }}&amp;z={{ zoom }}&amp;output=embed\"></iframe>
{% endif %}
{% if include_static_map %}
  <div class=\"simple-gmap-static-map\">
    <img src=\"https://maps.googleapis.com/maps/api/staticmap?size={{ width }}x{{ height }}&amp;scale={{ static_scale }}&amp;zoom={{ zoom }}&amp;language={{ langcode }}&amp;maptype={{ static_map_type }}&amp;markers=color:red|{{ url_suffix }}&amp;sensor=false&amp;key={{ apikey }}\" />
  </div>
{% endif %}
{% if include_link %}
  <p class=\"simple-gmap-link\"><a href=\"https://maps.google.com/maps?q={{ url_suffix }}&amp;hl={{ langcode }}&amp;t={{ map_type }}&amp;z={{ zoom }}\" target=\"_blank\">{{ link_text }}</a></p>
{% endif %}
{% if address_text is not empty %}
  <p class=\"simple-gmap-address\">{{ address_text }}</p>
{% endif %}
";
    }
}
