<?php

/* modules/contrib/views_slideshow/templates/views-slideshow-slide-counter.html.twig */
class __TwigTemplate_8353f474f48a17f53024119cb71d6e80d90fe6399240004d44863395dde72c3a extends Twig_Template
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
        $tags = array();
        $filters = array("t" => 17);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array('t'),
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

        // line 16
        echo "<div id=\"views_slideshow_slide_counter_";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["vss_id"]) ? $context["vss_id"] : null), "html", null, true));
        echo "\" ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
        echo ">
  <span class=\"num\">1</span> ";
        // line 17
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("of")));
        echo " <span class=\"total\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["slide_count"]) ? $context["slide_count"] : null), "html", null, true));
        echo "</span>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/views_slideshow/templates/views-slideshow-slide-counter.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 17,  43 => 16,);
    }

    public function getSource()
    {
        return "{#
/**
 * @file
 * Default theme implementation for a views slideshow slide counter.
 *
 * Available variables:
 * - classes: Classes to apply to the counter's div element.
 * - slide_count: Total number of slides.
 * - vss_id: The slideshow's id.
 *
 * @see template_preprocess_views_slideshow_slide_counter()
 *
 * @ingroup vss_templates
 */
#}
<div id=\"views_slideshow_slide_counter_{{ vss_id }}\" {{ attributes.addClass(classes) }}>
  <span class=\"num\">1</span> {{ 'of'|t }} <span class=\"total\">{{ slide_count }}</span>
</div>
";
    }
}
