using MovieDB.MovieDBRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MovieDB.MovieDBShared;
using MovieDBScanner;
using PagedList;
using MovieDBWeb.Models;
using MovieDBRepository;


namespace MovieDB.Controllers
{
    [Authorize]
    public class MoviesController : Controller
    {
        //
        // GET: /Movies/

        MovieRepository mr = new MovieRepository();

        public ActionResult Index(int page = 1, int pageSize = 500, string filter = "", string sortOrder="")
        {
         
            ViewBag.CurrentFilter = filter;
            ViewBag.PageSize = pageSize;

            var list = Filter(filter);
            if(ViewBag.CurrentSort == sortOrder)
            { 
                ViewBag.CurrentSort = sortOrder;
                sortOrder += " desc";
            }
                else
            {
                ViewBag.CurrentSort = sortOrder;
            }
            list = Sort(sortOrder, list);
            ViewData["pageSize"] = pageSize;
            ViewData["filter"] = filter;
            ViewData["sortOrder"] = sortOrder;
            ViewBag.PageSizeList = new List<SelectListItem>();
            ViewBag.PageSizeList.Add(new SelectListItem { Value = "10"});
            ViewBag.PageSizeList.Add(new SelectListItem { Value = "25" });
            ViewBag.PageSizeList.Add(new SelectListItem { Value = "50" });
            ViewBag.PageSizeList.Add(new SelectListItem { Value = "100" });
            ViewBag.PageSizeList.Add(new SelectListItem { Value = "500" });
            ViewBag.PageSizeList.Add(new SelectListItem { Value = "1000" });
            return View(list.ToPagedList(page, pageSize));
        }

        private IQueryable<Movie> Filter(string filter)
        {
            var list = mr.Retrieve();
            var filterList = filter.Split(new char[] { ' ', '+' });
            if (filter != "")
                list = from items in list
                       where filterList.All(val => items.Name.Contains(val))
                       select items;
            return list;
        }

        private static IQueryable<Movie> Sort(string sortOrder, IQueryable<Movie> list)
        {
            switch (sortOrder)
            {
                case "ID":
                    list = list.OrderBy(s => s.ID);
                    break;
                case "ID desc":
                    list = list.OrderByDescending(s => s.ID);
                    break;
                case "Name":
                    list = list.OrderBy(s => s.Name);
                    break;
                case "Name desc":
                    list = list.OrderByDescending(s => s.Name);
                    break;
                case "Type":
                    list = list.OrderBy(s => s.Type);
                    break;
                case "Type desc":
                    list = list.OrderByDescending(s => s.Type);
                    break;
                case "Location":
                    list = list.OrderBy(s => s.Location);
                    break;
                case "Location desc":
                    list = list.OrderByDescending(s => s.Location);
                    break;
                default:
                    list = list.OrderBy(s => s.Location).ThenBy(s => s.Name);
                    break;
            }
            return list;
        }

        //
        // GET: /Movies/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Movies/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Movies/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Movies/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Movies/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Movies/Delete/5

        public ActionResult Delete()
        {
            var model = new DeleteModel() { Message = "Success" };
            try
            {
                MoviesDBScanner mds = new MoviesDBScanner();
            }
            catch(Exception e)
            {
                model.Message = e.ToString();
            }

            return View(model);
        }

        //
        // POST: /Movies/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
