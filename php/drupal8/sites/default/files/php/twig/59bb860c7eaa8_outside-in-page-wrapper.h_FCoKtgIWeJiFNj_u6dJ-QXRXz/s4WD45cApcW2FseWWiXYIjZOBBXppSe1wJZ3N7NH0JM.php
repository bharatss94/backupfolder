<?php

/* core/modules/outside_in/templates/outside-in-page-wrapper.html.twig */
class __TwigTemplate_fcf31d6dbf7070c3e93154821b9aacff2dbf2894cb14341d97a20e00c14432f4 extends Twig_Template
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
        $tags = array("if" => 22);
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

        // line 22
        if ((isset($context["children"]) ? $context["children"] : null)) {
            // line 23
            echo "  <div class=\"dialog-off-canvas__main-canvas\" data-off-canvas-main-canvas >
    ";
            // line 24
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["children"]) ? $context["children"] : null), "html", null, true));
            echo "
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "core/modules/outside_in/templates/outside-in-page-wrapper.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  48 => 24,  45 => 23,  43 => 22,);
    }

    public function getSource()
    {
        return "{#
/**
 * @file
 * Default theme implementation for a page wrapper.
 *
 * For consistent wrapping to {{ page }} render in all themes. The
 * \"data-off-canvas-main-canvas\" attribute is required by the off-canvas dialog.
 * This is used by the outside_in/drupal.off_canvas library to select the
 * \"main canvas\" page element as opposed to the \"off canvas\" which is the tray
 * itself. The \"main canvas\" element must be resized according to the width of
 * the \"off canvas\" tray so that no portion of the \"main canvas\" is obstructed
 * by the tray. The tray can vary in width when opened and can be resized by the
 * user. The \"data-off-canvas-main-canvas\" attribute cannot be removed without
 * breaking the off-canvas dialog functionality.
 *
 * Available variables:
 * - children: Contains the child elements of the page.
 *
 * @ingroup themeable
 */
#}
{% if children %}
  <div class=\"dialog-off-canvas__main-canvas\" data-off-canvas-main-canvas >
    {{ children }}
  </div>
{% endif %}
";
    }
}
