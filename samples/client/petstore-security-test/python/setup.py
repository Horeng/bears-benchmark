# coding: utf-8

"""
    Swagger Petstore */ ' \" =end -- \\r\\n \\n \\r

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  */ ' \" =end --         # noqa: E501

    OpenAPI spec version: 1.0.0 */ ' \" =end -- \\r\\n \\n \\r
    Contact: apiteam@swagger.io */ ' \" =end -- \\r\\n \\n \\r
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from setuptools import setup, find_packages  # noqa: H301

NAME = "petstore-api"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["urllib3 >= 1.15", "six >= 1.10", "certifi", "python-dateutil"]

setup(
    name=NAME,
    version=VERSION,
    description="Swagger Petstore */ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r",
    author_email="apiteam@swagger.io */ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r",
    url="",
    keywords=["Swagger", "Swagger Petstore */ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description="""\
    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \&quot; \\  */ &#39; \&quot; &#x3D;end --         # noqa: E501
    """
)
